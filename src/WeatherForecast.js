import React, { useState } from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [forecastData, setForecastData] = useState({});

    function handleForecastResponse(response) {
        console.log(response.data);
        setForecastData({
            temperature: response.data.current.temp,
        })
    }

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiKey}&units=${props.unit}`;
    axios.get(url).then(handleForecastResponse);

    return (
        <Row className="WeatherForecast">
            <Col className="WeatherForecast col">
                <div className="WeatherForecast Day">
                    <h3>Tuesday</h3>
                </div>
                <div className="WeatherForecast Icon">
                    <WeatherIcon iconCode={props.iconCode}/>
                </div>
                <div className="WeatherForecast Temperatures">
                    <span className="WeatherForecast Max-temp">{forecastData.tempMax}°</span>
                    <span className="WeatherForecast Min-temp">5°</span>
                </div>
            </Col>
        </Row>
    )
}


