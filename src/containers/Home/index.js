import React, {Component} from 'react';
import {connect} from 'react-redux'; 
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/';
import Compare from '../../components/Compare'
import SearchBar from '../../components/SearchBar'
import CarsList from '../../components/CarsList';
import { CSSTransitionGroup } from 'react-transition-group';

class Home extends Component {

  componentDidMount(){
    this.props.actions.getCars();
  }
  render(){ 
    const {cars, actions, foundResults, limit, carsToCompare} = this.props;
    //const carsToCompare = cars.filter(car => car.compare); //filter cars to compare

    return (
      <div className='container mt-5'>
        <SearchBar search={actions.search} foundResults={foundResults} />
          {carsToCompare.length >= 1 ? <Compare cars={carsToCompare} /> : null}
          <CarsList compare={actions.compare} limit={limit} cars={cars} />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cars: state.car.filteredCars,
    limit: state.car.limitCompare,
    carsToCompare: state.car.carsToCompare,
    foundResults: state.car.foundResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);