const apiKey = "b13852367f55131884d9289580dedd31";
const endpoint = "https://api.openweathermap.org/data/2.5/weather";

document.addEventListener("DOMContentLoaded", function () {
  const locationForm = document.getElementById("get-weather");
  const cityInput = document.getElementById("city");
  const weatherDisplay = document.querySelector(".weather-display");

  locationForm.addEventListener("click", async function (event) {
    event.preventDefault();

    const cityName = cityInput.value.trim();
    if (!cityName) {
      alert("Please enter a city name");
      return;
    }

    try {
      const weatherUrl = `${endpoint}?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await fetch(weatherUrl);
      const weatherData = await response.json();

      if (response.ok) {
        displayWeatherData(weatherData);
      } else {
        alert("Weather data not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Something went wrong. Please try again later.");
    }
  });

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    const weatherHtml = `
      <h3>Weather in ${name}</h3>
      <p>Temperature: ${main.temp}°C</p>
      <p>Condition: ${weather[0].description}</p>
    `;
    weatherDisplay.innerHTML = weatherHtml;
  }
});

addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("name").addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      setup();
    } else {
      alert("Please fix the errors in the form before submitting.");
    }

    setup();
  });
});

function validateForm() {
  let isValid = true;

  const name = document.getElementById("fullName").value;
  if (name === "") {
    isValid = false;
    alert("Incorrect name has been inputed.");
  }

  return isvalid;
}

function eatCookie(name) {
  const cookies = document.cookie;
  const searchTerm = name + "=";

  if (cookies.indexOf(searchTerm) !== -1) {
    let start = cookies.indexOf(searchTerm) + searchTerm.length;
    let end = cookies.indexOf(";", start);

    if (end === -1) {
      end = cookies.length;
    }

    return cookies.substring(start, end);
  }

  return "";
}

function setup() {
  savelocalstorage("name");
  savesessionstorage("name, weather");
  eatcookie();
}

function savelocalstorage(id) {
  let info = document.getElementById(id).value;
  localStorage.setItem(id, info);
}

function savesessionstorage(id) {
  const info = document.getElementById(id).value;
  sessionStorage.setItem(id, info);
}

function eatcookie(name) {
  let username = document.getElementById("name").value.trim;
  if (username) document.cookie = `username${username}; max-age = 300 `;
}
