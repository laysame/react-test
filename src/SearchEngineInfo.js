import React from "react";
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTemperatureHigh, faArrowCircleUp,faArrowCircleDown, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faTemperatureHigh,faArrowCircleUp,faArrowCircleDown, faWater, faWind );

export default function SearchEngineInfo(props) {
    const {onUnitChange} = props;

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
                            <Button className="btn" onClick={() => onUnitChange('metric')}>°C</Button>
                            <Button className="btn" onClick={() => onUnitChange('imperial')}>°F</Button>
                        </ButtonGroup>
                    </div>
                </Col>
                <Col className="SearchEngine Header col clearfix mt-5 p-0">
                    <div className="">
                       <WeatherIcon iconCode={props.data.icon} alt={props.data.description}/>
                        <div className="mt-1 Description">
                            <span>{props.data.description}</span>
                        </div>
                    </div>
                </Col>
                <Col className="SearchEngine col mt-5 p-0">
                    <nav className="SearchEngine ms-3">
                        <ul className="SearchEngine Description">
                            <li><FontAwesomeIcon icon="temperature-high" /> Feels Like: {props.data.feelsLike}°</li>
                            <li><FontAwesomeIcon icon="arrow-circle-up"/> {props.data.tempMax}°
                                <FontAwesomeIcon icon="arrow-circle-down"/> {props.data.tempMin}°</li>
                            <li><FontAwesomeIcon icon="water"/> Humidity: {props.data.humidity}%</li>
                            <li><FontAwesomeIcon icon="wind"/> Wind: {props.data.wind}km/H</li>
                        </ul>
                    </nav>
                </Col>
            </Row>
            <Row>

            </Row>
        </div>
    )
}

