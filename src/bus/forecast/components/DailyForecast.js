import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useFilter } from './hooks/useFilter';

import moment from 'moment';

export const DailyForecast = ({data, id, city}) => {
  const history = useHistory();
  const { filter } = useFilter();
  const { daily } = data;
  const filteredData = [...daily];

  // (filter.max_temp && filter.max_temp)

  const unixDate = (item) => {
    const date = new Date(item * 1000);
    return moment(date).format('dddd');
  }
  
  const toWeekDay = (index) => {
    history.push(`/${city}/${index}`);
  }
  
  const toCelcius = (item) => {
    return Math.floor(Number(item - 273.15))
  } 

  if (filter.type) {
    for(let i = 0; i < filteredData.length; i++) {
      if (filteredData[i].weather[0].main !== filter.type) {
        delete filteredData[i];
      }
    }
  }

  if (filter.max_temp && filter.max_temp) {
    for(let i = 0; i < filteredData.length; i++) {
      if (toCelcius(filteredData[i]?.temp.day) > filter.max_temp || toCelcius(filteredData[i]?.temp.day) < filter.min_temp) {
        delete filteredData[i];
      }
    }
  }

  useEffect(() => {
    history.push(`/${city}/${filteredData.findIndex(item => item != null)}`);
      // eslint-disable-next-line 
  }, [filter])


  return (
    <div className="forecast">
      <div className="forecast-block">
        {filteredData?.map((item, index) => {
          return (
            <div 
              key={index} 
              // eslint-disable-next-line 
              className={index == id ? 'forecast-block__item active' : 'forecast-block__item'}
              onClick={() => toWeekDay(index)}
            >
              <h3>{unixDate(item.dt)}</h3>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt="icon"
              />
              <div className="forecast-daysTemp">
                <p>Morning: </p>
                <p>{toCelcius(item.temp.morn)}°</p>
              </div>
              <div className="forecast-daysTemp">
                <p>Day: </p>
                <p>{toCelcius(item.temp.day)}°</p>
              </div>
              <div className="forecast-daysTemp">
                <p>Evening: </p>
                <p>{toCelcius(item.temp.eve)}°</p>
              </div>
              <div className="forecast-daysTemp">
                <p>Night: </p>
                <p>{toCelcius(item.temp.night)}°</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}
