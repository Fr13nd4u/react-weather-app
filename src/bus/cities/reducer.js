import { types } from './types';

const initialState = {
  data: [
    {id: 1, name: "New York"},
    {id: 2, name: "London"},
    {id: 3, name: "kyiv"}
  ]
};

export const citiesReducer = (state = initialState, action) => {
  switch(action.type){
    case types.CITIES_FILL: {
      return {
        ...state,
        data: action.payload,
      }
    }

    default: 
      return state
  }
}