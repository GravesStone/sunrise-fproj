import { createElement } from "./utils";

function WeatherApp() {
  const apiKey = '15afb914adc211c491651741ae88beb9'; // Replace with your OpenWeather API key

  function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const key in attributes) {
      element[key] = attributes[key];
    }
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
    return element;
  }

  function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayCurrentWeather(data);
      })
      .catch(error => {
        console.error('Error fetching current weather:', error);
      });
  }

  function displayCurrentWeather(data) {
    const currentWeatherInfo = document.getElementById('currentWeatherInfo');
    currentWeatherInfo.innerHTML = '';

    if (data.cod === '404') {
      currentWeatherInfo.textContent = 'City not found';
    } else if (data.main && data.weather && data.weather.length > 0) {
      const cityName = data.name;
      const temperature = Math.round(data.main.temp - 273.15); // Convert temperature from Kelvin to Celsius
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const windChill = calculateWindChill(temperature, windSpeed);

      const weatherText = `${cityName}: ${temperature}°C, ${description}, Humidity: ${humidity}%, Wind Chill: ${windChill}°C`;
      const weatherIcon = createElement('img', { src: iconUrl, alt: 'Weather Icon', className: 'weather-icon' });

      currentWeatherInfo.appendChild(createElement('div', { className: 'current-weather' }, [weatherText, weatherIcon]));
    } else {
      currentWeatherInfo.textContent = 'Error fetching weather data';
    }
  }

  function getForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayForecast(data);
      })
      .catch(error => {
        console.error('Error fetching forecast:', error);
      });
  }

  function displayForecast(data) {
    const forecastInfo = document.getElementById('forecastInfo');
    forecastInfo.innerHTML = '';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dailyForecasts = {};
    data.list.forEach(forecast => {
      const date = new Date(forecast.dt * 1000);
      const dayOfWeek = days[date.getDay()];

      if (!dailyForecasts[dayOfWeek]) {
        dailyForecasts[dayOfWeek] = {
          temperature: [],
          description: [],
          icon: [],
          humidity: [],
          windSpeed: []
        };
      }

      dailyForecasts[dayOfWeek].temperature.push(Math.round(forecast.main.temp - 273.15)); // Convert temperature from Kelvin to Celsius
      dailyForecasts[dayOfWeek].description.push(forecast.weather[0].description);
      dailyForecasts[dayOfWeek].icon.push(forecast.weather[0].icon);
      dailyForecasts[dayOfWeek].humidity.push(forecast.main.humidity);
      dailyForecasts[dayOfWeek].windSpeed.push(forecast.wind.speed);
    });

    for (const day in dailyForecasts) {
      const card = createElement('div', { className: 'card' });

      const dayOfWeek = createElement('h2', { textContent: day });

      const temperatures = createElement('p', { textContent: `Temperature: ${dailyForecasts[day].temperature.join('°C, ')}°C` });

      const descriptions = createElement('p', { textContent: `Description: ${dailyForecasts[day].description.join(', ')}` });

      const humidity = createElement('p', { textContent: `Humidity: ${dailyForecasts[day].humidity.join('%, ')}%` });

      const windSpeed = createElement('p', { textContent: `Wind Speed: ${dailyForecasts[day].windSpeed.join(' m/s, ')} m/s` });

      const icon = createElement('img', { src: `http://openweathermap.org/img/w/${dailyForecasts[day].icon[0]}.png`, alt: 'Weather Icon', className: 'weather-icon' });

      card.appendChild(dayOfWeek);
      card.appendChild(icon);
      card.appendChild(temperatures);
      card.appendChild(descriptions);
      card.appendChild(humidity);
      card.appendChild(windSpeed);

      forecastInfo.appendChild(card);
    }
  }

  function calculateWindChill(temperature, windSpeed) {
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    return Math.round(windChill * 10) / 10;
  }

  function handleSearch() {
    const cityInput = document.getElementById('cityInput').value;
    getWeather(cityInput);
    getForecast(cityInput);
  }

  return createElement('div', { className: 'container' }, [
    createElement('h2', { textContent: 'Weather Search' }),
    createElement('div', { className: 'input-container' }, [
      createElement('input', { id: 'cityInput', type: 'text', placeholder: 'Enter city name' }),
      createElement('button', { id: 'searchBtn', textContent: '🔍Search', onclick: handleSearch })
    ]),
    createElement('div', { id: 'currentWeatherInfo', className: 'current-weather' }),
    createElement('div', { id: 'forecastInfo', className: 'forecast' }),
    createElement('div', { id: 'recentSearches', className: 'recent-searches' }, [
      
    ])
  ]);
}

export default WeatherApp;
