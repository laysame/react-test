import React, { useState } from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import "./WeatherForecast.css";
import Loader from "react-loader-spinner";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState({ready: false});

    function handleForecastResponse(response) {
        setForecast({
            ready: true,
            forecastData: response.data.daily,
        })
    }

    if(forecast.ready) {
        return (
            <Row className="WeatherForecast">
                <Col className="WeatherForecast col">
                    <Forecast forecastData={forecast.forecastData} />
                </Col>
            </Row>
        )
    } else {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiKey}&units=${props.unit}`;
        axios.get(url).then(handleForecastResponse);
        
        return (
            <div className="text-center">
                <Loader
                    type="ThreeDots"
                    color="#99621b"
                    height={50}
                    width={50}
                    timeout={700}
                />
            </div>
        )
    }

}


