const apiKey = "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl =
"https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search Button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWheater(city) {
    const response = await fetch(apiurl + city + `&appid = ${apiKey}`)
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = 
        Math.round(data.main.temp) + "*C";
        document.querySelector(".humidity").innerHTML = data.wind.speed = "Km/h";

        console.log(data.weather[0].main);
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/Clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWheater(searchBox.value);
});

checkWheater();
