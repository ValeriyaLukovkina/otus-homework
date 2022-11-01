import style from './SelectionCityList.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';


const SelectionCityList = (props) => {

    return (
        <>
            {props.cityList.length >= 1 &&
                props.cityList.map(el => {
                    return (
                        <div className={style.city_list}>
                            <NavLink onClick={() => {
                                props.getDataCurrentCity(el.id);
                                props.changeFetching(true);
                            }} to={`/city/${el.name.split(' ').join('')}`} className={style.city_list_txt}>{el.name}</NavLink>
                        </div>
                    )
                })
            }
        </>
    )

}

export default SelectionCityList;