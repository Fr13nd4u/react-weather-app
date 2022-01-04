import axios from 'axios'

import { API_KEY } from '../../API_KEY'
import { types } from './types'

export const weatherActions = Object.freeze ({
  // Sync
  startFetching: () => {
    return {
      type: types.WEATHER_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.WEATHER_STOP_FETCHING
    }
  },
  fill: (payload) => {
    return {
      type: types.WEATHER_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.WEATHER_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },
  // Async
  fetchAsync: (city) => async(dispatch) => {
    dispatch(weatherActions.startFetching());

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then(response => {
      dispatch(weatherActions.fill(response.data));
    })
    .catch(error => {
      dispatch(weatherActions.setFetchingError(error.response));
    })

    dispatch(weatherActions.stopFetching());
  }
})