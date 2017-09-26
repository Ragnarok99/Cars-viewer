import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/";
import Compare from "../../components/Compare";
import SearchBar from "../../components/SearchBar";
import CarsList from "../../components/CarsList";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      carsToShow: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.actions.getCars();
    console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    const { cars, carsToCompare } = newProps;
    //assign compare true for UI porpouses
    let carsToShow = cars.map(car => {
      let item = carsToCompare.find(carTC => carTC === car);
      if (item) {
        return { ...car, compare: true };
      } else {
        return car;
      }
    });
    this.setState({
      cars: carsToShow,
      carsToShow
    });
  }

  render() {
    const { actions, foundResults, carsToCompare } = this.props;

    return (
      <div className="container mt-5">
        <SearchBar search={this.handleSearch} foundResults={foundResults} />
        {carsToCompare.length >= 1 ? <Compare cars={carsToCompare} /> : null}
        <CarsList compare={actions.compare} cars={this.state.carsToShow} elementsCompared={carsToCompare.length} />
      </div>
    );
  }
  handleSearch(term) {
    console.log(term);
    this.setState({
      carsToShow: this.state.cars.filter(car =>
        car.manufacturer.toLowerCase().includes(term.toLowerCase())
      )
    });
  }
}

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
