import React,{useState}from 'react'
import axios from 'axios'

function Weather() {

    const [city,setCity]=useState();
    const [weather,setWeather]=useState();
    const handleChange = (event) =>{
        setCity(event.target.value)
    }

    const fetchWeather = async ()=>{
        try{
            const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6bcee8f826291d3aea495fa6bb068bd1'}`)
            setWeather(response);

        }
        catch(error){
            console.log("Error fetching weather data",error);
        }
    }

    const handleClick= ()=>{
        fetchWeather();
    }
  return (
    <div className='weather-container'>
        <input type="text" placeholder='Enter city name' value={city} onChange={handleChange}/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
            <div className='weather-info'>
                <h3>{weather.data.name}</h3>
                <p>Temp is {weather.data.main.temp}</p>
                <p>{weather.data.weather[0].description}</p>
            </div>
        </>}
    </div>
  )
}

export default Weather;
