import React, {useState} from "react";
import axios from "axios";
import './weather.css';


export default function Weather(props) {
const[weatherData, setWeatherData] = useState({ready:false});

function handleResponse(response) {setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date:"Wednesday 10:50",
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png",
    wind: response.data.wind.speed,
    city: response.data.name
}); }

if(weatherData.ready) {return(<div class="weather">
<form>
<div class="row mb-3 mt-3">
<div class="col">
 <input type="text" 
 class="form-control" 
 placeholder="Enter the name of a city..." />
  </div>
  <div class="col">
<button type="submit" class="btn btn-primary">Search</button>
</div>
</div>
</form>
<div class="tempDetails">
 <div class="container"> 
 <div class = "row">
     <div class="col-6">
         <div class="row">
     <div class="col-2"> 
     <img src= {weatherData.iconUrl} alt={weatherData.description} /> 
     </div>
     <div class="col-4 temperature">
         
     {Math.round(weatherData.temperature)}
     <span class="tempCelsius">°C|</span>
     <span class="tempFahr">°F</span>
     </div>
     <div class="col-4 tempData">
             <div>Precipitations: </div>
             <div>Humidity: {weatherData.humidity} </div>
             <div>Wind: {weatherData.wind} </div>
      </div>
     </div>
     </div>
     <div class="col-6 cityDetails">
         <div class="cityName">{weatherData.city}</div>
         <div class="tempDay">{weatherData.date}</div>
         <div class="tempDesc text-capitalize">{weatherData.description}</div>
         </div>

 </div>
 </div>
 </div>
         </div>)}
         
        else{
            const apiKey="302c93e3e9e39b90c8c02a8d733c82ec";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);

            return "Loading...";
        }

    
           }