import React, { useState } from "react";
import { connect } from "react-redux";
import SelectionCityList from "./SelectionCityList";
import axios from 'axios';
import { changeFetchingAC, getDataCurrentCityAC } from "../../../../../redux/get-city-reducer";

const SelectionCityListContainer = (props) => {
    const [cityName, setCityName] = useState('')
    const [cityList, setCityList] = useState([])
    if (props.search.cityName !== cityName) {
        setCityName(props.search.cityName)
        axios.get(`http://localhost:3001/citylist/${props.search.cityName}`)
            .then(response => {
                setCityList(response.data.map(el => {
                    return {
                        "id": el.id,
                        "name": el.name,
                        "state": el.state,
                        "country": el.country,
                        "coord": {
                            "lon": el.coord.lon,
                            "lat": el.coord.lat
                        }
                    }
                }))
            })
    }
    const getDataCurrentCity = (id) => {
        debugger
        axios.get(`http://localhost:3001/citylist/getId/${id}`)
            .then(response => {
                props.getDataCurrentCity({
                    id: response.data[0].id,
                    name: response.data[0].name,
                    country: response.data[0].country,
                    coord: {
                        lon: response.data[0].coord.lon,
                        lat: response.data[0].coord.lat
                    }
                })
            })
    }

    return (
        < SelectionCityList cityList={cityList} getDataCurrentCity={getDataCurrentCity} changeFetching={props.changeFetching}/>
    )
}


const mapStateToProps = (state) => ({
    search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
    getDataCurrentCity: (obj) => {
        dispatch(getDataCurrentCityAC(obj))
    },
    changeFetching: (boolFetching) => {
        dispatch(changeFetchingAC(boolFetching))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionCityListContainer);