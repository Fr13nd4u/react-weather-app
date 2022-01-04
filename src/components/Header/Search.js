import React, {useState} from 'react'
import { useHistory } from 'react-router';

import { useGeo } from '../hooks/useGeo'
import { Search as SearchIcon } from '../../assets/search-icon'

export const Search = () => {
  const [value, setValue] = useState('');
  const history = useHistory();
  const userGeo = useGeo();

  const submitHandler = (event) => {
    event.preventDefault();

    if(value.trim()) {
      history.push('/' + value + '/0')
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHandler} className="menu-search">
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Enter the city"
      />

      <SearchIcon 
        submitHandler={submitHandler}
      />
      <img
        src="https://img.icons8.com/ios-filled/50/ffffff/south-direction.png"
        alt="geo"
        onClick={() => setValue(userGeo)}
      />
    </form>
  )
}
