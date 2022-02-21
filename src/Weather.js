import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "./App.css";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  //const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: " Monday 11:00",
      humidity: response.data.main.humidity,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="Search-form">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter city"
                autocomplete="off"
                className="City"
              />
            </div>

            <br />
            <div className="col-3">
              <input type="Submit" value="Search" className="Form-control" />
            </div>
          </div>
        </form>
        <button className="Currentlocation">Current Location</button>
        <div className="row mt-3">
          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <p>
              Last updated:<span>{weatherData.date}</span>
            </p>
            <img src={weatherData.iconUrl} alt="" />

            <div className="Description">
              <div className="col-12"> {weatherData.description}</div>
            </div>
            <div className="col-12">
              <div className="CurrentTemp">
                {Math.round(weatherData.temperature)}°C
              </div>

              <button className="Celsius">°C</button>
              <span className="Divider"> | </span>
              <button className="Fahrenheit">°F</button>
            </div>

            <div className="Humidity col-12">
              <div>Humidity {weatherData.humidity}</div>
            </div>
            <div className=" Pressure col-12">
              <div>Pressure {weatherData.pressure}</div>
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
  } else {
    let apiKey = "409c92218249e96f0e8de22a43f0bc4b";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
