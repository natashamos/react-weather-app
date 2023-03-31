import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div>
      <div className="day-forecast">{day()}</div>
      <div>
        <WeatherIcon code={props.data.condition.icon} size={35} />
      </div>
      <div className="max-temp-forecast">{maxTemperature()}</div>
      <div className="min-temp-forecast">{minTemperature()}</div>
    </div>
  );
}
