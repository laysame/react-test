import React from "react";
import {Col, Row} from "react-bootstrap";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
                        <span className="WeatherForecast Max-temp">10°</span>
                        <span className="WeatherForecast Min-temp">5°</span>
                    </div>
                </Col>
            </Row>
    )
}