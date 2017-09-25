import * as types from '../constants/types';
import _ from 'lodash';
const INITIAL_STATE = {
  cars: [],
  filteredCars: [],
  foundResults: true,
  carDetails: {},
  carsToCompare: [],
  limitCompare: 0
};

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case types.FETCH_CARS:
    const cars = _.orderBy(action.payload, ['manufacturer']);
    const fetchedCars = cars.map(cars =>
      ({...cars, compare: false})
    );
    
      return {
        ...state, 
        cars: fetchedCars,
        filteredCars: fetchedCars,
        limitCompare: 0,
        carDetails: {}
        
      };

      case types.COMPARE_CAR: 
        
        let currentElementsInComparison = state.carsToCompare;

        let indexCarInComparisonArr = currentElementsInComparison.findIndex(car => car.id == action.car.id); //search element in carsToCompare
        console.log('index ', indexCarInComparisonArr);
        console.log('id llego ', action.car.id);
        console.log('elementos ', state.carsToCompare);
        if(indexCarInComparisonArr === -1) { //doesn´t exist, lets push it into comparision arr 
          currentElementsInComparison = currentElementsInComparison.concat(action.car);
          console.log('push y quedo ', currentElementsInComparison);
        }
        else {//exist, lets put it out of comparison arr 
          
          currentElementsInComparison = currentElementsInComparison.filter(car => car.id != action.car.id);
          
        }
        //invert the property compare of the cars clicked
        return {
          ...state,
          carsToCompare: currentElementsInComparison
        }
      // let filteredCars = state.filteredCars.map(car => car.id === action.car.id ?
      //   ({...car, compare: !car.compare}) : car
      // );

        // return {
        //   ...state,
        //   filteredCars: filteredCars,
        //   limitCompare: filteredCars.filter(el => el.compare).length
        // }
      
        case types.SEARCH_CARS: 
        let filtered = state.cars.filter(car => car.manufacturer.toLowerCase().includes(action.manufacturer.toLowerCase()));

          return {
            ...state,
            filteredCars: filtered.map(car => ({...car, compare: false})),
            foundResults: filtered.length > 0 ? true : false,
            limitCompare: 0

          }

          case types.FETCH_CAR:
            return {
              ...state, 
              carDetails: {...action.car, compare: false}
            }

        default:
          return state;
  }
}