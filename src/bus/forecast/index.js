import React from 'react'
import { useParams } from "react-router-dom";
import { useForecastFetch } from './hooks/useForecastFetch';

import { MainWeather } from './components/MainWeather';
import { DailyForecast } from './components/DailyForecast';
import { Filter } from './components/Filter';
import { Clock } from './components/Clock';

import './Forecast.scss';

export const Forecast = ({coord, city, country}) => {
  const { id } = useParams();
  const { data } = useForecastFetch(coord.lat, coord.lon);

  return (
    <>
      <div className="weather-header">
        <h1>
          {city},{" "}
          {country}
        </h1>
        <Clock />
      </div>
      {data && <div className="weather-main">
        <MainWeather
          id={id}
          data={data}
        />
        <Filter 
        />
        <DailyForecast
          id={id}
          city={city}
          data={data}
        />
      </div>}
    </>
  )
}
