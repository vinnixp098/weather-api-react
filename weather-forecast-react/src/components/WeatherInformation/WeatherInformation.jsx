// src/components/WeatherInformation/WeatherInformation.jsx
import React from 'react';

function WeatherInformation({ weather }) {
  // Verifique se o objeto `weather` contém os dados necessários
  if (!weather || !weather.weather || weather.weather.length === 0) {
    return <div>Dados do tempo não disponíveis</div>;
  }

  // Extraia o primeiro item do array `weather.weather`
  const weatherData = weather.weather[0];
  const { icon, description } = weatherData;
  const { name } = weather; // Nome da cidade

  return (
    <div>
      <h2>{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
      />
      <p>{description}</p> {/* Exibe a descrição do tempo */}
      <p>{weather.main.feels_like}</p>
    </div>
  );
}

export default WeatherInformation;
