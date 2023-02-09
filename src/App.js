import React from 'react';
import axios from 'axios';
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [name,setname] = useState("delhi")
  const [data,setData] = useState('')

  useEffect(() => {
    function weather(name){
      let apikey = "3f43861535182c49434a4fcfaa6ad0ec";
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apikey}`)
        .then((response)=>{
          console.log(response);
          let weatherData = [response.data.name]
          setData(weatherData)
        })
        .catch((error)=>{
          console.log(error);
        })
    }
    weather(name)
  })
  
  

  return (
    <div>
    <form>
    <input />
    <button>o</button>
    </form>
    </div>
  );
}

export default App;
