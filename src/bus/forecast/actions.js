import axios from 'axios'

import { API_KEY } from '../../API_KEY'
import { types } from './types'

export const forecastActions = Object.freeze ({
  // Sync
  startFetching: () => {
    return {
      type: types.FORECAST_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.FORECAST_STOP_FETCHING
    }
  },
  fill: (payload) => {
    return {
      type: types.FORECAST_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.FORECAST_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },
  // Async
  fetchAsync: (lat, lon) => async(dispatch) => {
    dispatch(forecastActions.startFetching());

    await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${API_KEY}`)
    .then(response => {
      dispatch(forecastActions.fill(response.data));
    })
    .catch(error => {
      dispatch(forecastActions.setFetchingError(error.response));
    })

    dispatch(forecastActions.stopFetching());
  }
})