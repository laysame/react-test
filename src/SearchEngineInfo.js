import React, { useState } from "react";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import FormattedDate from "./FormattedDate";

export default function SearchEngineInfo(props) {
    const [unit, setUnit] = useState("metric");

    function convertMetric(){
        setUnit("metric");
    }

    function convertImperial(){
        setUnit("imperial");
    }
    return (
        <div className="SearchEngineInfo">
            <Row>
                <Col className="SearchEngine Header col-6 pe-0 ms-5 mt-5">
                    <div>
                        <h1>{props.data.cityName}, {props.data.countryName}</h1>
                        <h2>
                            <FormattedDate dt={props.data.date} />
                        </h2>
                        <span className="SearchEngine Temperature">{props.data.temperature}°</span>
                        <ButtonGroup size="mb-2">
                            <Button className="btn" onClick={convertMetric}>°C</Button>
                            <Button className="btn" onClick={convertImperial}>°F</Button>
                        </ButtonGroup>
                    </div>
                </Col>
                <Col className="SearchEngine Header col-6 clearfix mt-5 p-0">
                    <div className="">
                        <img src={props.data.icon} alt="weather-icon"/>
                        <div className="mt-1 Description">
                            <span>{props.data.description}</span>
                        </div>
                    </div>
                </Col>

            </Row>
            <Row>
                <Col className="SearchEngine col-12 mb-3 ps-0">
                    <nav className="SearchEngine">
                        <ul className="SearchEngine Description list-group list-group-horizontal-sm">
                            <li className="list-group-item">Feels Like {props.data.feelsLike}°</li>
                            <li className="list-group-item">High: {props.data.tempMax}° | Low: {props.data.tempMin}°</li>
                            <li className="list-group-item">Humidity: {props.data.humidity}%</li>
                            <li className="list-group-item">Wind: {props.data.wind}km/H</li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        </div>
    )
}