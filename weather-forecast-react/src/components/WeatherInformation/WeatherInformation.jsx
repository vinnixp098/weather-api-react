import './WeatherInformation.css';
import React from 'react';

function WeatherInformation({ weather }) {
  // Verifique se o objeto `weather` contém os dados necessários
  if (!weather || !weather.weather || weather.weather.length === 0) {
    return <div></div>;
  }

  // Extraia o primeiro item do array `weather.weather`
  const weatherData = weather.weather[0];
  const { icon, description } = weatherData;
  const { name } = weather; // Nome da cidade

  return (
    <div class="cityContainer">
      <div className="cityName">
        <h2>{name}</h2>
      </div>
      <div className="weatherIcons">
        <div className="weatherImgTemp">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icone do tempo" />
          <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
        <div className="weatherDescription">
          <p>{description}</p>
        </div>
      </div>
      <div className="weatherInfo">
        <p>
          Sensação térmica: {Math.round(weather.main.feels_like)}°C
        </p>
        <p>
          Pressão: {weather.main.pressure} hPa
        </p>
        <p>
          Humidade: {weather.main.humidity}%
        </p>
      </div>


    </div>
  );
}

export default WeatherInformation;
