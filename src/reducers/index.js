import { combineReducers } from 'redux';
import car from './cars_reducer';

const carsViewApp = combineReducers ({
  car
})

export default carsViewApp;