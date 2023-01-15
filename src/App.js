import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <h1>  Weather App </h1>
<Weather />
<footer>
      <p> This project is done by Buife and is an {" "}  
        <a href="https://github.com/Nnebuife/react-weather-app" target="_blank" rel="noopener noreferrer"> 
         open-source code
        </a>
       {" "}on GitHub.
      </p>
      </footer>
      </div>
    </div>
  );
}