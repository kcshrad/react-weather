import React from "react";
import "./Weather.css";
import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: " Monday 11:00",
    description: "Sunny",
    humidity: "48 %",
    pressure: "1010",
    currentTemp: "25°C",
  };
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
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />

          <div className="Description">
            <div className="col-12"> {weatherData.description}</div>
          </div>
          <div className="col-12">
            <div className="CurrentTemp">{weatherData.currentTemp}</div>

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
          <a href="https://github.com/kcshrad/my-project">Open source code</a>
          ,by Shraddha Thapa
        </div>
      </div>
    </div>
  );
}
