import React from 'react';
import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [name,setname] = useState("delhi")
  const [renderName,setRenderName] = useState('')
  const [temperature,setTemperature] = useState('')
  const [icon,setIcon] = useState('')
  const [description,setDescription] = useState('')
  const [humidity,setHumidity] = useState('')
  const [wind,setWind] = useState('')

  useEffect(() => {
    function weather(name){
      let apikey = "3f43861535182c49434a4fcfaa6ad0ec";
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`)
        .then((response)=>{
          console.log(response);
          let renderNameData = response.data.name
          let temp = response.data.main.temp
          let newTemp = Math.round(temp - 273.15)
          let weather = response.data.weather[0]
          let icondata = weather.icon
          let humiditydata = response.data.main.humidity
          let descriptiondata = weather.description
          let winddata = response.data.wind.speed
          setRenderName(renderNameData)
          setTemperature(newTemp)
          setIcon(icondata)
          setHumidity(humiditydata)
          setDescription(descriptiondata)
          setWind(winddata)
        })
        .catch((error)=>{
          console.log(error);
        })
    }
    weather(name)
  },[name])
  
  return (
    <>
    <div className='main-container'>
      <form>
      <div>
      <input
        type="text"
        name='name'
        placeholder='Enter your city'
        value={name}
        onChange={(e)=>setname(e.target.value)} />
      </div>
      <div>
        <h1>{renderName}</h1>
        <h1>{temperature}°C</h1>
        <div className='image-container'><img src={`http://openweathermap.org/img/wn/${icon}.png`}/><h4>{description}</h4></div>
        <p>Humidity:{humidity}</p>
        <p>Wind:{wind}</p>
      </div>
      </form>
    </div>
    </>
  );
}

export default App;
