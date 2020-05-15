/**
 * Weather App
 * Completed getWeatherData() to return json response Promise
 * Completed searchCity() to get user input and get data using getWeatherData()
 * Completed showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * Use fetch()
 * URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */


getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //Use template literals to create a url with input and an API key
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response)=>{
    return response.json();
  })

}


/**
 Retrieve city input--the id is what is in html and then look for the data in the browser > inspect > console
 Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // CODE GOES HERE
  getWeatherData(city)
  .then((response)=>{
    console.log(response)
    showWeatherData(response)
  }).catch((error)=>{
    console.log(error)
  })

}

/**
the data below is found in the browser under inspect
 */
showWeatherData = (weatherData) => {
 document.getElementById("city-name").innerText = weatherData.name
 document.getElementById("weather-type").innerText = weatherData.weather[0].main
 document.getElementById("temp").innerText = weatherData.main.temp
 document.getElementById("min-temp").innerText = weatherData.main.temp_min
 document.getElementById("max-temp").innerText = weatherData.main.temp_max
}

