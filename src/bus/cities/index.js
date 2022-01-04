import React from 'react'
import { useCities } from './hooks/useCities'

import { CitiesList } from './components/CitiesList'
import { AddCity } from './components/AddCity'
import './Cities.scss'


export const Cities = () => {

  const {cities} = useCities();
  return (
    <div className="save-cities">
      <h3>Saved cities: </h3>
      {cities.length ? <CitiesList /> : <h5>There is no cities!</h5> }
      <AddCity />
    </div>
  )
}
