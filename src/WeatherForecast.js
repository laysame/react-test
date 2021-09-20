import React, { useState, useEffect } from "react";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import "./WeatherForecast.css";
import Loader from "react-loader-spinner";
import Forecast from "./Forecast";

export default function WeatherForecast(props) {
    const [forecast, setForecast] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(false);
    },[props.latitude]);

    function handleForecastResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    if(ready) {
        return (
            <Row className="WeatherForecast">

                {forecast.map(function (dailyForecast, index){
                    if (index < 6 && index > 0) {
                    return (
                        <Col className="WeatherForecast col"  key={index}>
                            <Forecast forecastData={dailyForecast} />
                        </Col>
                    )} else {
                        return null;
                    }
                })}

            </Row>
        )
    } else {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&appid=${props.apiKey}&units=${props.unit}`;
        axios.get(url).then(handleForecastResponse);
        
        return (
            <div className="text-center">
                <Loader
                    type="ThreeDots"
                    color="#34094d"
                    height={60}
                    width={60}
                    timeout={900}
                />
            </div>
        )
    }

}


