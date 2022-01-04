import React from 'react'
import { Link } from 'react-router-dom';


import { useCities } from '../hooks/useCities'

export const CitiesItem = ({city}) => {
  const {fillCities} = useCities();
  const {cities} = useCities();

  const removeCity = (id) => {
    fillCities(cities.filter(city => city.id !== id ))
  }
  
  return (
    <li>
      <Link to={'/' + city.name + '/0'}>{city.name}</Link>
      <img onClick={() => removeCity(city.id)} src="https://img.icons8.com/material-rounded/32/ffffff/plus-math--v1.png" alt="plus" />
    </li>
  )
}
