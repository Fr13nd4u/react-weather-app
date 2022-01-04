import { types } from './types';

const initialState = {
  data: {
    type: null,
    max_temp: null,
    min_temp: null,
  }
};

export const filterReducer = (state = initialState, action) => {
  switch(action.type){
    case types.FILTER_FILL: {
      return {
        ...state,
        data: action.payload,
      }
    }

    default: 
      return state
  }
}