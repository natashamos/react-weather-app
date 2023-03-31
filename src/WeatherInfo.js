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
        <div className="col mt-2 weather-icon">
          <WeatherIcon
            code={props.data.icon}
            size={90}
            alt={props.data.description}
          />
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
    </div>
  );
}
