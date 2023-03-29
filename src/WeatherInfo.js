import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>
        Last updated:{" "}
        <span>
          <FormattedDate date={props.data.date} />
        </span>
      </h2>
      <div className="row text-center today">
        <div className="col">
          <WeatherTemperature celsius={props.data.temperature} />
          <div className="text-capitalize">{props.data.description}</div>
        </div>
        <div className="col">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col">
          <ul className="details">
            <li>
              Feels like: <span>{props.data.feelsLike}</span>
              °C
            </li>
            <li>
              Wind: <span>{props.data.wind}</span> mph
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
      /*{" "}
      <div className="row text-center week forecast">
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
