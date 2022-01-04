import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forecastActions } from '../actions'

export const useForecastFetch = (lat, lon) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(forecastActions.fetchAsync(lat, lon))
  }, [dispatch, lat, lon]);

  const { data } = useSelector((state) => state.forecast);

  return {
    data
  }
}
