import React from "react";


export default function WeatherIcon(props) {
    const IconMap = {
        '01d': '/icons/clear-sky-day.png',
        '01n': '/icons/clear-sky-night.png',
        '02d': '/icons/few-clouds-day.png',
        '02n': '/icons/few-clouds-night.png',
        '03d': '/icons/scattered-clouds.png',
        '03n': '/icons/scattered-clouds-night.png',
        '04d': '/icons/broken-clouds.png',
        '04n': '/icons/broken-clouds.png',
        '09d': '/icons/shower-rain.png',
        '09n': '/icons/shower-rain.png',
        '10d': '/icons/rain.png',
        '10n': '/icons/shower-rain-night.png',
        '11d': '/icons/thunderstorm-day.png',
        '11n': '/icons/thunderstorm-night.png',
        '13d': '/icons/snow-day.png',
        '13n': '/icons/snow-night.png',
        '50d': '/icons/mist.png',
        '50n': '/icons/mist.png',
    };
    return (
        <div className="WeatherIcon">
            <img src={IconMap[props.iconCode]} alt={props.alt} size={props.size}/>
        </div>
    )
}