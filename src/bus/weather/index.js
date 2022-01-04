import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { useWeatherFetch } from './hooks/useWeatherFetch';
import { Forecast } from '../forecast';
import { useFilter } from '../forecast/components/hooks/useFilter';

import './Weather.scss';

export const Weather = () => {
  const { city, id } = useParams();
  const { isFetching, data, error} = useWeatherFetch(city);
  const { fillFilter } = useFilter();
  const history = useHistory();

  const toPrev = () => {
    fillFilter({
      type: null,
      max_temp: null,
      min_temp: null,
    });
    history.push(`/${city}/0`);
  }
    
  if (id === '-1') {
    return <div className="centered">
      <h3>There are no days available for the specified criteria</h3>
      <button onClick={() => toPrev()}>Back</button>
    </div>
  }
  
  if (error?.status === 404) {
    return <h3 className="centered">You entered the wrong city name try again!</h3>
  }

  if (error && error.status !== 404) {
    return <h3 className="centered">Something went wrong!</h3>
  }

  const spinnerJSX = isFetching && (
    <div className="spinner"></div>
  );

  const successJSX = !isFetching && data && (
    <div className="weather">
      
      <Forecast 
        coord = {data.coord} 
        city = {data?.name}
        country = {data?.sys.country}
      />
    </div>
  )
  return (
    <>
      {spinnerJSX}
      {successJSX}
    </>
  )
}
