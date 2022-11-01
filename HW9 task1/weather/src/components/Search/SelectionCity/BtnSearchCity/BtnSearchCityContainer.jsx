import React from "react";
import { connect } from "react-redux";
import { selectCityNameAC, showInputAC } from "../../../../redux/search-reducer";
import BtnSearchCity from "./BtnSearchCity";

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

});


const BtnSearchCityContainer = connect(mapStateToProps, mapDispatchToProps)(BtnSearchCity);

export default BtnSearchCityContainer;