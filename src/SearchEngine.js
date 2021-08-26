import React, { useState } from "react";
import "./SearchEngine.css";
import { Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function SearchEngine(props) {
    //const [input, setInput] = useState(null);
    const [city, setCity] = useState(null);
    const [weather, setWeather] = useState({});
    const [loaded, setLoaded] = useState(false);

    const apiKey = "14710927095f6c1242ef86d55fbc5c01";
    const unit = "metric";

    function handleResponse(response) {
        console.log(response.data)
        setLoaded(true)
        setWeather({
                temperature: Math.round(response.data.main.temp),
                description: response.data.weather[0].description,
                humidity: response.data.main.humidity,
                wind: Math.round(response.data.wind.speed),
                cityName: response.data.name,
            }
        )
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
                className="SearchEngine-Input w-50 m-2 p-2"
                type="search"
                placeholder="Type a city..."
                onChange={updateSubmit}
            />
            <input
                className="SearchEngine-Submit m-2 p-2 "
                type="submit"
                value="Search"
            />
            <input
                className="SearchEngine-Submit m-2 p-2 "
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
                                color="#984BD7FF"
                                height={30}
                                width={30}
                                timeout={400}
                            />
                            <h1 className="mt-3 p-0">{weather.cityName}</h1>
                            <ul className="p-0 ms-2 description">
                                <li>{weather.temperature}°C</li>
                                <li>{weather.description}</li>
                                <li>Humidity: {weather.humidity}%</li>
                                <li>Wind: {weather.wind}km/H</li>
                            </ul>
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