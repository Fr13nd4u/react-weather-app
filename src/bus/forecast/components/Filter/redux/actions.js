import { types } from './types'

export const filterAction = {
  fillFilter: (filter) => {
    return {
      type: types.FILTER_FILL,
      payload: filter,
    }
  }
}