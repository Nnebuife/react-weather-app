import React from "react";


export default function Weather() {
    return <div class="Weather border">
   <form>
  <div class="row mb-3 mt-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="Enter the name of a city..." />
     </div>
     <div class="col">
  <button type="submit" class="btn btn-primary">Search</button>
  </div>
  </div>
</form>
    <div class="container"> 
    <div class = "row">
        <div class="col"> 
        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="clear sky with some clouds" /> 
        </div>
        <div class="col">28</div>
        <div class="col-3">
            <ul>
                <li>Precipitations: </li>
                <li>Humidity: </li>
                <li>Wind: </li>
            </ul>
        </div>
        <div class="col-6">
            <div class="col">Abuja</div>
            <div class="col">Sunday 7pm</div>
            <div class="col">Clear sky with some clouds</div>
            </div>

    </div>
    </div>
            </div>
           }