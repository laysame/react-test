import React, { useState } from 'react';
import './SearchEngine.css';
import { Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import SearchEngineInfo from './SearchEngineInfo';
import WeatherForecast from './WeatherForecast';

export default function SearchEngine(props) {
  const apiKey = '1e7c392c03e6846776d349c369f06242';
  const [unit, setUnit] = useState('metric');
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      cityName: response.data.name,
      countryName: response.data.sys.country,
      icon: response.data.weather[0].icon,
      feelsLike: Math.round(response.data.main.feels_like),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      date: new Date(response.data.dt * 1000),
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function onUnitChange(unit) {
    setUnit(unit);
    apiSearch(unit);
  }

  function apiSearch(unit) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    apiSearch(unit);
  }

  function updateSubmit(event) {
    setCity(event.target.value);
  }

  function handlePosition(position) {
    console.log(position.coords);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  function handleCurrent(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(handlePosition);
  }

  let form = (
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
    </Form>
  );

  if (weather.ready) {
    return (
      <div className="SearchEngine m-5">
        <Container>
          <Row>
            <Col className="col-12">
              {form}
              <SearchEngineInfo data={weather} onUnitChange={onUnitChange} />
            </Col>
          </Row>
          <WeatherForecast
            iconCode={weather.icon}
            apiKey={apiKey}
            latitude={weather.latitude}
            longitude={weather.longitude}
            unit={unit}
          />
        </Container>
      </div>
    );
  } else {
    apiSearch(unit);
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
    );
  }
}
