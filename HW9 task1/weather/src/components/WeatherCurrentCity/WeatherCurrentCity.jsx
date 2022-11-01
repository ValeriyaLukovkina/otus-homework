import React from "react";
import logoWeather from './../../assests/svg/weather.svg';
import logoWind from './../../assests/svg/wind.svg';
import logoDrow from './../../assests/svg/drow.svg';
import style from './WeatherCurrentCity.module.scss'
import WeatherBlock from "./WeatherBlock/WeatherBlock";
import TimeTotal from "../TimeTotal/TimeTotal";

const WeatherCurrentCity = (props) => {

    // const [dataWeather, setDataWeather] = useState('');

    // useEffect(() => {
    //     axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${props.getCity.dataCurrentCity.coord.lat}&lon=${props.getCity.dataCurrentCity.coord.lon}&appid=b66d03559856ea5e789198fdd1f948b0`)
    //     .then(response => {
    //         setDataWeather(response.data);

    //     })
    // }, [props.getCity.dataCurrentCity.coord.lat, props.getCity.dataCurrentCity.coord.lon])

    const getCurrentTime = (timeZone) => {
        const currentTimeSec = +new Date() / 1000 + timeZone;
        return new Date(currentTimeSec * 1000);
    }


    const addZero = (num) => {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }

    const getDate = (date) => {
        let nameMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${addZero(date.getUTCDate())} ${nameMonth[date.getUTCMonth()]} ${date.getUTCFullYear()}`
    }

    const getWeekDay = (date) => {
        let nameWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return nameWeek[date.getUTCDay()]
    }

    const getTime = (date) => {
        return `${addZero(date.getUTCHours())}:${addZero(date.getUTCMinutes())}`
    }

    return (
        <>
        {/* {props.weather.isFetching ? <Loading /> :
        <> */}
        {props.dataWeather && 
        <div className={style.weather}>
            <div className={style.weather_common}>
                <img className={style.weather_common_logo} src={logoWeather} alt='' />
                <div className={style.weather_common_temp}>
                    <button className={style.weather_common_temp_btn + ' ' + style.weather_common_temp_btn_active}>F</button>
                    <button className={style.weather_common_temp_btn}>C</button>
                </div>
            </div>
            <div className={style.weather_temp}>
                <h2 className={style.weather_temp_value}>{Math.round(props.dataWeather.list[0].main.temp)}</h2>
                <div className={style.weather_temp_deg}>F</div>
            </div>
            <p className={style.weather_date}>{getDate(getCurrentTime(props.dataWeather.city.timezone))}</p>
            <div className={style.weather_time}>
                <p className={style.weather_time_txt}>{getWeekDay(getCurrentTime(props.dataWeather.city.timezone))}</p>
                <div className={style.weather_line}></div>
                <p className={style.weather_time_txt}>{getTime(getCurrentTime(props.dataWeather.city.timezone))}</p>
            </div>
            <div className={style.weather_value}>
                <div className={style.weather_value_one}>
                    <img src={logoWind} alt='' />
                    <p className={style.weather_value_txt}>Wind</p>
                    <p>{props.dataWeather.list[0].wind.speed}</p>
                </div>
                <div className={style.weather_line}></div>
                <div className={style.weather_value_one}>
                    <img src={logoDrow} alt='' />
                    <p className={style.weather_value_txt}>Hum</p>
                    <p>{props.dataWeather.list[0].main.humidity} %</p>
                </div>
                {/* <div className={style.weather_line}></div>
                <div className={style.weather_value_one}>
                    <img src={logoRain} alt='' />
                    <p className={style.weather_value_txt}>Rain</p>
                    <p>1</p>
                </div> */}
            </div>
            < TimeTotal />
            <div className={style.temp}>
                <WeatherBlock />
            </div>
        </div>
    }
    {/* </>
    } */}
    </>
    )
}

export default WeatherCurrentCity;