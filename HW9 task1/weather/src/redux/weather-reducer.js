const SET_DATA_WEATHER = 'SET_DATA_WEATHER';

let initialState = {
    dataWeather: '',

}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_WEATHER: 
            return {
                ...state,
                dataWeather: action.weatherData
            } 
        default: 
            return state
    }
}

export const setDataWeatherAC = (weatherData) => ({type: SET_DATA_WEATHER, weatherData})

export default weatherReducer;