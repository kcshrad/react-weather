import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <p>
            <FormattedDate date={props.data.date} />
          </p>
          <WeatherIcon code={props.data.icon} size={52} />

          <div className="Description">
            <div className="col-12"> {props.data.description}</div>
          </div>
          <div className="col-12">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>

          <div className="Humidity col-12">
            <div>Humidity {props.data.humidity}</div>
          </div>
          <div className=" Pressure col-12">
            <div>Pressure {props.data.pressure}</div>
          </div>
        </div>

        <div className="col-6">
          <div className="Weather-forecast"></div>
        </div>
        <div>
          <a href="https://github.com/kcshrad/react-weather">
            Open source code
          </a>
          , by Shraddha Thapa
        </div>
      </div>
    </div>
  );
}
