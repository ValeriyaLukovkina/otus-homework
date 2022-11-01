import React from "react";
import { connect } from "react-redux";
import { getDataCurrentCityAC } from "../../../redux/get-city-reducer";
import { selectCityNameAC, showInputAC } from "../../../redux/search-reducer";
import SelectionCity from "./SelectionCity";


const mapStateToProps = (state) => ({
    search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
    showInput: () => {
        dispatch(showInputAC())
    },
    selectCityName: (name) => {
        dispatch(selectCityNameAC(name))
    },
    getDataCurrentCity: (id) => {
        dispatch(getDataCurrentCityAC(id))
    }

});

const SelectionCityContainer = connect (mapStateToProps, mapDispatchToProps)(SelectionCity);

export default SelectionCityContainer;