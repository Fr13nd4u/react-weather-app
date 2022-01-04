import {combineReducers} from 'redux'

import {citiesReducer as cities} from '../bus/cities/reducer'
import {weatherReducer as weather} from '../bus/weather/reducer'
import {forecastReducer as forecast} from '../bus/forecast/reducer'
import {filterReducer as filter} from '../bus/forecast/components/Filter/redux/reducer'

export const rootReducer = combineReducers({
  cities,
  weather,
  forecast,
  filter
})