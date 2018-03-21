import { FETCHING_DATA } from '../../config/redux-types'

export function fetchData() {
  return {
    type: FETCHING_DATA
  }
}