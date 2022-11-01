import axios from "axios";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeFetchingAC } from "../../redux/get-city-reducer";
import { setDataWeatherAC } from "../../redux/weather-reducer";
import Loading from "../Loading/Loading";
import WeatherCurrentCity from "./WeatherCurrentCity";

const WeatherCurrentCityContainer = (props) => {
    debugger
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.getCity.dataCurrentCity.coord.lat}&lon=${props.getCity.dataCurrentCity.coord.lon}&appid=b66d03559856ea5e789198fdd1f948b0`)
        .then(response => {
            debugger
            props.setDataWeather(response.data);
            props.changeFetching(false);

        })
    }, [props.getCity.dataCurrentCity.coord.lat, props.getCity.dataCurrentCity.coord.lon])
    return (
        <>
        { props.getCity.isFetching ? < Loading /> :
            <WeatherCurrentCity dataWeather={props.weather.dataWeather}/>
        }
        </>
    )
}

const mapStateToProps = (state) => ({
    getCity: state.getCity,
    weather: state.weather
});

const mapDispatchToProps = (dispatch) => ({
    setDataWeather: (weatherData) => {
        dispatch(setDataWeatherAC(weatherData))
    },
    changeFetching: (boolFetching) => {
        dispatch(changeFetchingAC(boolFetching))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherCurrentCityContainer)