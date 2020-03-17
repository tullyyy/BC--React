import React from "react";
import "./WeeklyForecast.css";

export class WeeklyForecast extends React.Component {
  render() {
    return (
      <>
        <h1>Weekly Weather Forecast</h1>
        <div className="week-forecast"></div>
      </>
    );
  }
}
