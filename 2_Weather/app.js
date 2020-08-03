
const DOMweaterIcone = document.querySelector(".weatherIcone");
const DOMweatherTemp = document.querySelector(".weatherTemp");
const DOMweatherDescription = document.querySelector(".weatherDescription");
const DOMweatherCity = document.querySelector(".weatherCity");


const weather = {};



async function main (withIP = true) {
    let city;
    
    if(withIP) {
        city = await fetch(`http://ip-api.com/json`)
            .then(result => result.json())
            .then(json => json.city);
    }
    else {
        city = document.querySelector(".customCity").value;
    }

    const weatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=646d82915c35c27e56f30d7478d9c087`)
                .then(result => result.json())
                .then(data => data);

    displayWeather(weatherData);

}


function customCity() {
    main(false);
    document.querySelector(".customCity").value = "";
}

main();




function displayWeather(data) {
    weather.iconId = data.weather[0].icon;
    weather.temp = Math.floor(data.main.temp - 273);
    weather.description = data.weather[0].description;
    weather.city = data.name;
    weather.country = data.sys.country;
    
    
    DOMweaterIcone.innerHTML = `<img src="icones/${weather.iconId}.png" alt="weather">`;
    DOMweatherTemp.innerHTML = `<p>${weather.temp}°<span class="weatherTempUnit"> C</span></p>`;
    DOMweatherDescription.innerHTML = `<p>${weather.description}</p>`;
    DOMweatherCity.innerHTML = `<p>${weather.city}, ${weather.country}</p>`;
}
