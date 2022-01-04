import React from 'react'
import { Link } from 'react-router-dom';

import { Search } from './Search'
import './Header.scss'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <menu>
          <h1><Link to="/">Weather App</Link></h1>
          <Search/>
        </menu>
      </div>
    </header>
  )
}
