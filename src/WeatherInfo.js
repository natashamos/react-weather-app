import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="current-city">{props.data.city}</h1>
      <h2>
        Last updated:{" "}
        <span>
          <FormattedDate date={props.data.date} />
        </span>
      </h2>
      <div className="row text-center today">
        <div className="col">
          <span className="current-temperature">
            {props.data.temperature.current}
          </span>
          <span className="units">°C</span>
          <div className="text-capitalize">{props.data.description}</div>
        </div>
        <div className="col">
          <img
            alt="icon"
            id="icon"
            className="icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png"
          />
        </div>
        <div className="col">
          <ul className="details">
            <li>
              Feels like:{" "}
              <span id="feels-like">{props.data.temperature.feels_like}</span>
              °C
            </li>
            <li>
              Wind: <span id="wind-speed">{props.data.wind.speed}</span> mph
            </li>
            <li>
              Humidity:{" "}
              <span id="humidity">{props.data.temperature.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
      <div className="row text-center week forecast" id="forecast">
        <div className="col">
          <div className="day-forecast"></div>
          <div>
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              width="40"
            />
          </div>
          <div className="max-temp-forecast"></div>
          <div className="min-temp-forecast"></div>
        </div>
      </div>
    </div>
  );
}
