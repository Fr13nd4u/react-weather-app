import { useState } from 'react'


export const useGeo = () => {
  const [geo, setGeo] = useState();

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=a356395b098546e5845b00b42279ee93`
    )
    .then((res) => res.json())
    .then((data) => {
      setGeo(data.results[0].components.city);
    });
  });
  return geo
};