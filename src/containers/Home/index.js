import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/";
import Compare from "../../components/Compare";
import SearchBar from "../../components/SearchBar";
import CarsList from "../../components/CarsList";
import { CSSTransitionGroup } from "react-transition-group";

class Home extends Component {
  componentDidMount() {
    this.props.actions.getCars();
  }
  render() {
    const { cars, actions, foundResults, carsToCompare } = this.props;
    let idsCompared = carsToCompare.map(el => el.id);
    return (
      <div className="container mt-5">
        <SearchBar search={actions.search} foundResults={foundResults} />
        {carsToCompare.length >= 1 ? <Compare cars={carsToCompare} /> : null}
        <CarsList
          elementsCompared={carsToCompare.length}
          idsCompared={idsCompared}
          compare={actions.compare}
          cars={cars}
        />
      </div>
    );
  }
}

Home.PropTypes = {
  cars: PropTypes.array,
  carsTtoCompare: PropTypes.array,
  foundResults: PropTypes.bool,
  actions: PropTypes.object,
  getCars: PropTypes.func,
  search: PropTypes.func,
  compare: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    cars: state.car.filteredCars,
    carsToCompare: state.car.carsToCompare,
    foundResults: state.car.foundResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
