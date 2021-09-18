import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(props) {

    const temperatureMax = props.forecastData.temp.max;
    const temperatureMin = props.forecastData.temp.min;
    const date = new Date(props.forecastData.dt * 1000 );
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
    let day = days[date.getDay()];
    const icon = props.forecastData.weather[0].icon;

    console.log(date)

    return (
        <div className="Forecast">

            <div className="WeatherForecast Day">
                <h3>{day}</h3>
            </div>
            <div className="WeatherForecast Icon">
                <WeatherIcon iconCode={icon}/>
            </div>
            <div className="WeatherForecast Temperatures">
                <span className="WeatherForecast Max-temp">{Math.round(temperatureMax)}°</span>
                <span className="WeatherForecast Min-temp">{Math.round(temperatureMin)}°</span>
            </div>

        </div>
    )
}