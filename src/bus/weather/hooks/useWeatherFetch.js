import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { weatherActions } from '../actions'

export const useWeatherFetch = (city) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(weatherActions.fetchAsync(city))
  }, [dispatch, city]);

  const {
    data,
    isFetching,
    error
  } = useSelector((state) => state.weather);

  return {
    data,
    isFetching,
    error,
  }
}
