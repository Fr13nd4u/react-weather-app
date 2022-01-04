import { types } from './types'

export const citiesAction = {
  fillCity: (city) => {
    return {
      type: types.CITIES_FILL,
      payload: city,
    }
  }
}