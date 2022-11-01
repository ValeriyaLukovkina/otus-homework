const SHOW_INPUT = 'SHOW_INPUT';
const SELECT_CITY_NAME = 'SELECT_CITY_NAME';

let initialState = {
    startedSeach: false,
    selectionCity: '',
    cityName: 'Выберите город (на английском)',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INPUT:
            return {
                ...state,
                cityName: 'Выберите город (на английском)',
                startedSeach: !state.startedSeach
            }
        case SELECT_CITY_NAME:
            return {
                ...state,
                cityName: action.newCityName
            }

        default:
            return state
    }
}

export const showInputAC = () => ({ type: SHOW_INPUT });

export const selectCityNameAC = (newCityName) => ({ type: SELECT_CITY_NAME, newCityName });

export default searchReducer;