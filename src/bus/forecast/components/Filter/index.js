import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';

import { TempSlider } from './TempSlider';
import { useFilter } from '../hooks/useFilter';

import './Filter.scss';

export const Filter = () => {
  const [filterVal, setFilterVal] = useState(null);
  const [temp, setTemp] = useState([]);

  const { fillFilter } = useFilter();

  const weatherTypes = [
    'Clear',
    'Clouds',
    'Rain',
    'Snow',
    'Mist',
    'Thunderstorm',
  ]

  const toFilter = item => {
    fillFilter({
      max_temp: temp[1] || null,
      min_temp: temp[0] || null,
      type: item.checked,
    })
  }

  const tempVal = value => {
    setTemp(value); 
  }

  return (
    <div className="filter">
      <TempSlider
        tempVal={tempVal}
      />

      <Formik
        initialValues={{checked: filterVal}}
        onSubmit={ values => {
          setFilterVal(values.checked);
          toFilter(values);
        }}
        onReset={values => {
          setFilterVal(null);
          setTemp([]); 
          toFilter(values);
        }}
      >
        <Form>
          <div role="group" aria-labelledby="checkbox-group">
            {
              weatherTypes.map((item, index) => {
                return (
                  <label key={index}>
                    <Field type="radio" name="checked" value={item} />
                    {item}
                  </label>
                )
              })
            }
          </div>

          <h4>max temp: {temp[1]}</h4>
          <h4>min temp: {temp[0]}</h4>

          <div className="filter-btns">
            <button type="submit">Filter</button>
            <button type="reset">Reset</button>
          </div>

        </Form>
      </Formik>
    </div>
  )
}
