import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="row text-center week forecast">
      <div className="col">
        <div className="day-forecast">Fri</div>
        <div>
          <WeatherIcon code="clear-sky-day" size={35} />
        </div>
        <div className="max-temp-forecast">10</div>
        <div className="min-temp-forecast">15</div>
      </div>
    </div>
  );
}
