import React from 'react'

import { useWeatherData } from '../hooks/useWeatherData'

export const MainWeather = ({data, id}) => {
  const { daily } = data;
  const { weatherObj } = useWeatherData(daily[id]);

  return (
    <>
      <div className="weather-main-body__main">
        <h3>{weatherObj.dt}, {weatherObj.dtDay}</h3>
        <h4>
          <img src={weatherObj.icon} alt="icon" />
          {weatherObj.temp}°<br />
          <span>{weatherObj.description}</span>
        </h4>
      </div>
      <div className="weather-main-body__bord">
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.hight}°<br /><span>hight</span></h5>
        </div>
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.pressure} mm<br /><span>pressure</span></h5>
        </div>
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.wind_speed} mph<br /><span>wind speed</span></h5>
        </div>
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.sunrise}<br /><span>sunrise</span></h5>
        </div>

        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.low}°<br /><span>low</span></h5>
        </div>
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.humidity} %<br /><span>humidity</span></h5>
        </div>
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.wind_deg}°<br /><span>wind degree</span></h5>
        </div>
        <div className="weather-main-body__bord-item">
          <h5>{weatherObj.sunset}<br /><span>sunset</span></h5>
        </div>
      </div>
    </>
  )
}
