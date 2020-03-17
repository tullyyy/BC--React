import { WeeklyForecast } from "./WeeklyForecast/WeeklyForecast.jsx";
import { DayForecast } from "./DayForecast/DayForecast.jsx";
import "./index.css";
import "./index.html";
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <WeeklyForecast>
          <DayForecast
            weekday="Mon"
            weather="cloudy"
            tempDay="18"
            tempNight="11"
          />
          <DayForecast
            weekday="Tue"
            weather="partly-cloudy"
            tempDay="21"
            tempNight="15"
          />
          <DayForecas weekday="Wed" weather="rainy" tempDay="8" tempNight="1" />
          <DayForecast
            weekday="Thu"
            weather="snowy"
            tempDay="-2"
            tempNight="-7"
          />
          <DayForecast
            weekday="Fri"
            weather="stormy-rain"
            tempDay="28"
            tempNight="21"
          />
          <DayForecast
            weekday="Sat"
            weather="stormy"
            tempDay="27"
            tempNight="11"
          />
          <DayForecast
            weekday="Sun"
            weather="sunny"
            tempDay="28"
            tempNight="22"
          />
        </WeeklyForecast>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
