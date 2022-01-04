import React, {useState} from 'react'

import { useCities } from '../hooks/useCities'

export const AddCity = () => {
  const [value, setValue] = useState('')
  const {fillCities} = useCities();
  const {cities} = useCities();

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      fillCities(cities.concat([{
        id: Date.now(),
        name: value, 
      }]));
      setValue('');
    }
  }
    
  return (
    <form onSubmit={submitHandler} className="add">
        <input type="text" 
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <img 
          src="https://img.icons8.com/material-rounded/32/ffffff/plus-math--v1.png" alt="plus"
          onClick={submitHandler}
        />
    </form>
  )
}
