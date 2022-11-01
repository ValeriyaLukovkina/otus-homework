import React from "react";
import logoCloud from './../../../assests/svg/cloud.svg';
import style from './WeatherBlock.module.scss'

const WeatherBlock = () => {
    return (
        <>
            <div className={style.temp}>
                <p className={style.temp_txt}>22</p>
                <img className={style.temp_logo} src={logoCloud} alt='' />
                <p className={style.temp_txt}>День</p>
            </div>
            <div className={style.temp}>
                <p className={style.temp_txt}>22</p>
                <img className={style.temp_logo} src={logoCloud} alt='' />
                <p className={style.temp_txt}>День</p>
            </div>
            <div className={style.temp}>
                <p className={style.temp_txt}>22</p>
                <img className={style.temp_logo} src={logoCloud} alt='' />
                <p className={style.temp_txt}>День</p>
            </div>
            <div className={style.temp}>
                <p className={style.temp_txt}>22</p>
                <img className={style.temp_logo} src={logoCloud} alt='' />
                <p className={style.temp_txt}>День</p>
            </div>
        </>

    )
}

export default WeatherBlock;