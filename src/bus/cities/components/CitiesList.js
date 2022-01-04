import React from 'react'
import { useCities } from '../hooks/useCities'

import { CitiesItem } from './CitiesItem'

export const CitiesList = () => {
  const {cities} = useCities();
  return (
    <ul>
      {cities.map((city) => {
        return <CitiesItem
          key={city.id} 
          city={city} 
         />
      })}
    </ul>
  )
}
