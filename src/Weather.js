import React from "react";
import './weather.css';

export default function Weather() {
    return <div class="weather">
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
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="clear sky with some clouds" /> 
        </div>
        <div class="col-4 temperature">
            
        28
        <span class="tempCelsius">°C|</span>
        <span class="tempFahr">°F</span>
        </div>
        <div class="col-2 tempData">
                <div>Precipitations: </div>
                <div>Humidity: </div>
                <div>Wind: </div>
         </div>
        </div>
        </div>
        <div class="col-6 cityDetails">
            <div class="cityName">Abuja</div>
            <div class="tempDay">Sunday 7pm</div>
            <div class="tempDesc">Clear sky with some clouds</div>
            </div>

    </div>
    </div>
    </div>
            </div>
           }