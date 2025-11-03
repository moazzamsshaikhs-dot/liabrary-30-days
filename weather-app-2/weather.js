// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const weatherInfo = document.getElementById('weather-info');
const weatherIcon = document.getElementById('weather-icon');
const temperature = document.getElementById('temperature');
const city = document.getElementById('city');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

// API Configuration
const apiKey = "9c3f02f8dbc2e528031f76ab9aa612eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Event Listeners
searchBtn.addEventListener('click', () => {
    const cityName = searchInput.value.trim();
    if (cityName) {
        checkWeather(cityName);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const cityName = searchInput.value.trim();
        if (cityName) {
            checkWeather(cityName);
        }
    }
});

// Weather Function
async function checkWeather(cityName) {
    // Show loading, hide other elements
    loading.style.display = 'block';
    error.style.display = 'none';
    weatherInfo.style.display = 'none';

    try {
        const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

        if (response.status === 404) {
            throw new Error('City not found');
        }

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Update UI with weather data
        city.textContent = data.name;
        temperature.textContent = Math.round(data.main.temp) + "°C";
        humidity.textContent = data.main.humidity + "%";
        wind.textContent = data.wind.speed + " km/h";

        // Set weather icon based on condition
        const weatherCondition = data.weather[0].main;
        setWeatherIcon(weatherCondition);

        // Show weather info, hide loading
        weatherInfo.style.display = 'block';
        loading.style.display = 'none';

    } catch (error) {
        // Show error message
        loading.style.display = 'none';
        weatherInfo.style.display = 'none';
        this.error.style.display = 'block';
        console.error('Error fetching weather data:', error);
    }
}

// Function to set weather icon based on condition
function setWeatherIcon(condition) {
    const iconElement = weatherIcon.querySelector('i');

    const iconMap = {
        'Clouds': 'fas fa-cloud',
        'Clear': 'fas fa-sun',
        'Rain': 'fas fa-cloud-rain',
        'Drizzle': 'fas fa-cloud-drizzle',
        'Thunderstorm': 'fas fa-bolt',
        'Snow': 'fas fa-snowflake',
        'Mist': 'fas fa-smog',
        'Smoke': 'fas fa-smog',
        'Haze': 'fas fa-smog',
        'Dust': 'fas fa-smog',
        'Fog': 'fas fa-smog',
        'Sand': 'fas fa-smog',
        'Ash': 'fas fa-smog',
        'Squall': 'fas fa-wind',
        'Tornado': 'fas fa-tornado'
    };

    // Set new icon class
    iconElement.className = iconMap[condition] || 'fas fa-cloud';
}

// Initialize with a default city
window.addEventListener('load', () => {
    // Show weather info by default
    weatherInfo.style.display = 'block';
    // You can also load a default city
    // checkWeather('London');
});