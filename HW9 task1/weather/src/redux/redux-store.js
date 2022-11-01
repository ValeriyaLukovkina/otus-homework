import { combineReducers, legacy_createStore as createStore } from 'redux';
import getCityReducer from './get-city-reducer';
import searchReducer from './search-reducer';
import weatherReducer from './weather-reducer';

let reducers = combineReducers ({
    search: searchReducer,
    getCity: getCityReducer,
    weather: weatherReducer,
})

let store = createStore(reducers);

export default store;

window.store = store