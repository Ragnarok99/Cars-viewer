import * as types from '../constants/types'
import _ from 'lodash';
const base_url = 'http://localhost:3000/'
//let dat = require ('cars.json');
export function getCars () {
  return dispatch => {
    fetch(`${base_url}cars.json`)
    .then(response => response.json())
    .then(response => {
      dispatch({
        type: types.FETCH_CARS,
        payload: response.cars
      })
    })
  }
}

export function compare (car)  {
  return {
    type: types.COMPARE_CAR,
    car
    }
}

export function search(manufacturer) {
  return {
    type: types.SEARCH_CARS,
    manufacturer
  }
}

export function getCar (id) {
  return dispatch => {
    fetch(`${base_url}cars.json`)
    .then(response => response.json())
    .then(response => {
      
      const car = _.find(response.cars, ['id', id]);  

      dispatch({
        type: types.FETCH_CAR,
        car
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

