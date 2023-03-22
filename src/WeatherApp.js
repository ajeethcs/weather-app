import React from "react";
import Search from "./components/search/Search";
import "./WeatherApp.css";

function WeatherApp() {
  return (
    <div className="containerMain">
      <div className="header">Weather App</div>
      <Search />
    </div>
  );
}

export default WeatherApp;
