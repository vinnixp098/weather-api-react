import { useState, useEffect, useRef } from 'react';
import './App.css'
import axios from 'axios';
import WeatherInformation from './components/WeatherInformation/weatherInformation';

function App() {
  const [weather, setWeather] = useState({});
  const inputRef = useRef();

  async function searchCity(){
    
    const cityName = inputRef.current.value;
    const keyApi = "05138500be22715eaf4a7f8c4904a03c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyApi}&lang=pt_br&units=metric`;

    const response = await axios.get(url);
    setWeather(response.data);

    console.log("dados: ", response.data);

  }

  return (

    <div  className="container">
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformation weather={weather} /> 
    </div>
      
  
  )
}

export default App
