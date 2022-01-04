import {useDispatch, useSelector} from 'react-redux';

import { citiesAction } from '../actions'

export const useCities = () => {
  const selector = (state) => state.cities;
  const {data} = useSelector(selector);
  const dispatch = useDispatch();

  const fillCities = (city) => {
    const action = citiesAction.fillCity(city);

    dispatch(action);
  }

  return {
    cities: data,
    fillCities,
  }
}