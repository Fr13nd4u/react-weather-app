import moment from 'moment'

export const useWeatherData = (item) => {
  
  const unixTime = (unixData) => {
    const date = new Date(unixData * 1000);
    return moment(date).format('hh:mm');
  };

  const unixDate = (unixData) => {
    const date = new Date(unixData * 1000);
    return moment(date).format('MMMM Do YYYY');
  };

  const unixDateDay = (unixData) => {
    const date = new Date(unixData * 1000);
    return moment(date).format('dddd');
  };

  return {
    weatherObj: {
      dt: unixDate(item.dt),
      dtDay: unixDateDay(item.dt),
      temp: Math.round(Number(item.temp.day - 273.15)),
      description: item.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      hight:  Math.round(Number(item.temp.max - 273.15)),
      low:  Math.round(Number(item.temp.min - 273.15)),
      humidity: item.humidity,
      pressure: Math.round(Number(item.pressure / 1.333)),
      wind_deg: item.wind_deg,
      wind_speed: item.wind_speed,
      sunrise: unixTime(item.sunrise),
      sunset: unixTime(item.sunset),
    }
  }
}