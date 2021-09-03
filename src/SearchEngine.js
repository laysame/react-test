import React, { useState } from "react";
import "./SearchEngine.css";
import { Form, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clock } from '@fortawesome/free-solid-svg-icons';

const IconMap = {
    '01d': '/icons/clear-sky-day.png',
    '01n': '/icons/clear-sky-night.png',
    '02d': '/icons/few-cloud-day.png',
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

export default function SearchEngine() {
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState({});
    const [loaded, setLoaded] = useState(false);

    const apiKey = "14710927095f6c1242ef86d55fbc5c01";
    const unit = "metric";

    function handleResponse(response) {
        setLoaded(true)
        setWeather({
            temperature: Math.round(response.data.main.temp),
            description: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed),
            cityName: response.data.name,
            countryName: response.data.sys.country,
            icon: IconMap[response.data.weather[0].icon],
        })

    }

    function handleSubmit(event){
        event.preventDefault();
        //setCity(input);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=${unit}`;
        axios.get(url).then(handleResponse);
    }

    function updateSubmit(event){
        setCity(event.target.value);
    }

    function handleCurrent(event) {
        event.preventDefault();
    }


    let form =

        <Form onSubmit={handleSubmit}>
            <input
                className="SearchEngine-Input w-50 m-1 p-3 rounded-sm"
                type="search"
                placeholder="Type a city..."
                autoFocus="on"
                onChange={updateSubmit}
            />
            <input
                className="SearchEngine-Submit rounded-sm m-1 p-3 "
                type="submit"
                value="Search"
            />
            <input
                className="SearchEngine-Submit rounded-sm p-3 "
                type="submit"
                value="Current"
                onClick={handleCurrent}
            />
        </Form>;

    if (loaded) {
        return (
            <div className="SearchEngine m-5">
                <Container>
                    <Row>
                        <Col className="col-12">
                            {form}
                            <Loader
                                type="ThreeDots"
                                color="#99621b"
                                height={30}
                                width={30}
                                timeout={400}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="SearchEngine Header col-7 mt-5">
                            <h1>{weather.cityName}, {weather.countryName}</h1>
                            <h2>Tuesday August 31</h2>
                        </Col>
                        <Col className="SearchEngine Temperature mt-4 col-2 ps-0">
                            <span>{weather.temperature}°</span>
                        </Col>
                        <Col className="SearchEngine Header col-3 mt-4 clearfix">
                            <img src={weather.icon} alt="weather-icon"/>
                            <div className="mt-3 description">
                                <span>{weather.description}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="SearchEngine m-5 description">
                <Container>
                    <Row>
                        <Col className="col-12">
                            {form}
                        </Col>
                    </Row>
                </Container>

            </div>

        )
    }
}