import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>
        Last updated: <FormattedDate date={props.data.date} />
      </h2>
      <div className="row text-center today">
        <div className="col">
          <WeatherTemperature celsius={props.data.temperature} />
          <div className="text-capitalize">{props.data.description}</div>
        </div>
        <div className="col mt-3 weather-icon">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col">
          <ul className="details">
            <li>
              Feels like: <span>{Math.round(props.data.feelsLike)}</span>
              °C
            </li>
            <li>
              Wind: <span>{Math.round(props.data.wind)}</span> mph
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>{" "}
      {/* <div className="row text-center week forecast">
        <div className="col">
          <div className="day-forecast"></div>
          <div>
            <img
            //   src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
            //   alt=""
            //   width="40"
            />
          </div>
          <div className="max-temp-forecast"></div>
          <div className="min-temp-forecast"></div>
        </div>
      </div> */}
    </div>
  );
}
