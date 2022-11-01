import React from "react";
import style from './BtnSearchCity.module.scss';
import logoSearch from './../../../../assests/svg/search.svg';
import SelectionCityListContainer from "./SelectionCityList/SelectionCityListContainer";

const BtnSearchCity = (props) => {
    // const [startedSeach, setStartedSeach] = useState(false)
    return (
        <div className={style.search_city}>
            <button onClick={props.showInput} className={
                style.search_city_btn + ' ' + (props.search.startedSeach && style.search_city_btn_absolute) }>
                <img src={logoSearch} className={style.btn_search_logo} alt="search" />
            </button>
            <div className={
                style.search_city_wrp + ' ' + (!props.search.startedSeach && style.search_city_wrp_hidden)
                 }>
                <input onChange={(e) => props.selectCityName(e.target.value)} className={style.search_city_input} autoFocus/>
                {(props.search.cityName.length > 0) && <SelectionCityListContainer />}
            </div>
        </div>
    )
}

export default BtnSearchCity;