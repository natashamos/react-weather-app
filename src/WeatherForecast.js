import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);
  let apiKey = "871226bt3b923e3o0bf9dcaf40d32e00";
  let city = props.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

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
