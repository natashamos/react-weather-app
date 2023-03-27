import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.condition.description,
      feelsLike: response.data.temperature.feels_like,
    });

    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form id="search-form">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city..."
              aria-label="City"
              aria-describedby="button-addon2"
              id="search-city-input"
            />
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
            <button
              className="current-location-button"
              id="current-location-button"
            >
              Current
            </button>
          </div>
        </form>
        <h1 id="current-city">{weatherData.city}</h1>
        <h2>
          Last updated:{" "}
          <span>
            <FormattedDate date={weatherData.date} />
          </span>
        </h2>
        <div className="row text-center today">
          <div className="col">
            <span className="current-temperature">
              {weatherData.temperature.current}
            </span>
            <span className="units">°C</span>
            <div className="text-capitalize">{weatherData.description}</div>
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
                <span id="feels-like">
                  {weatherData.temperature.feels_like}
                </span>
                °C
              </li>
              <li>
                Wind: <span id="wind-speed">{weatherData.wind.speed}</span> mph
              </li>
              <li>
                Humidity:{" "}
                <span id="humidity">{weatherData.temperature.humidity}</span>%
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
  } else {
    const apiKey = "871226bt3b923e3o0bf9dcaf40d32e00";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
