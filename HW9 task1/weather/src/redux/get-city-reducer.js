const GET_DATA_CURRENT_CITY = 'GET_DATA_CURRENT_CITY';
const CHANGE_FETCHING = 'CHANGE_FETCHING'

let initialState = {
    isFetching: false,
    dataCurrentCity: {
        id: '',
        name: '',
        country: '',
        coord: {
            lon: '',
            lat: ''
        }
    },
    
}

export const getCityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_CURRENT_CITY:
            return {
                ...state,
                dataCurrentCity: {
                    ...state.dataCurrentCity,
                    id: action.objDataCity.id,
                    name: action.objDataCity.name,
                    country: action.objDataCity.country,
                    coord: {
                        lon: action.objDataCity.coord.lon,
                        lat: action.objDataCity.coord.lat
                    }
                }
            }
        case CHANGE_FETCHING: 
        debugger
        return {
            ...state,
            isFetching: action.boolFetching
        }
        default:
            return state
    }
}

export const getDataCurrentCityAC = (objDataCity) => ({ type: GET_DATA_CURRENT_CITY, objDataCity });

export const changeFetchingAC = (boolFetching) => ({ type: CHANGE_FETCHING, boolFetching });


export default getCityReducer;