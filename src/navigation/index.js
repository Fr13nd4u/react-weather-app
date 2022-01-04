import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from '../components/Header';
import { Weather } from '../bus/weather'
import { Cities } from '../bus/cities'

export const Routes = () => {
  return (
  <div className="app">
      <Header/>
      <main>
        <Cities/>
          <Route exact path="/:city/:id">
            <Weather />
          </Route>
      </main>
  </div>
  )
}