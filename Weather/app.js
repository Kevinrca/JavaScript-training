
const DOMweaterIcone = document.querySelector(".weatherIcone");
const DOMweatherTemp = document.querySelector(".weatherTemp");
const DOMweatherDescription = document.querySelector(".weatherDescription");
const DOMweatherCity = document.querySelector(".weatherCity");

const weather = {};

let latitude = "47.15";
let longitude = "2.216667";

getWeather(latitude, longitude);



function getWeather(latitude, longitude) {
    
    const kelvin = 273;
    const key = "646d82915c35c27e56f30d7478d9c087"
    
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data) {
            weather.iconId = data.weather[0].icon;
            weather.temp = Math.floor(data.main.temp) - kelvin;
            weather.description = data.weather[0].description;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

function displayWeather() {
    DOMweaterIcone.innerHTML = `<img src="icones/${weather.iconId}.png" alt="weather">`;
    DOMweatherTemp.innerHTML = `<p>${weather.temp}°<span class="weatherTempUnit"> C</span></p>`;
    DOMweatherDescription.innerHTML = `<p>${weather.description}</p>`;
    DOMweatherCity.innerHTML = `<p>${weather.city}, ${weather.country}</p>`;
}