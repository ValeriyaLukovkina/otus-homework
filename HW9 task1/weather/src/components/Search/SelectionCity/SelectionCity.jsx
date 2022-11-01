import React from "react";
import style from './SelectionCity.module.scss';
import logoLocation from './../../../assests/svg/location.svg';
import BtnSearchCityContainer from "./BtnSearchCity/BtnSearchCityContainer";



const SelectionCity = (props) => {
    return (
        <div>
            <div className={style.city}>
                {!props.search.startedSeach && <div className={style.city_title}>
                    <img src={logoLocation} className={style.city_title_logo} alt="search" />
                    <h3 className={style.city_title_txt}>{props.search.selectionCity ? props.search.selectionCity : props.search.cityName}</h3>
                </div>}
                <BtnSearchCityContainer />
            </div>
        </div>
    )
}
export default SelectionCity;