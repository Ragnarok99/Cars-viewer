import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import * as actions from "../../actions";
import "./style.css";
class CarDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getCar(id);
  }

  render() {
    const { carDets } = this.props;
    console.log(carDets);
    if (carDets.id === undefined) {
      return <div>loading..</div>;
    }

    return (
      <div className="container">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <img
                  className="hvr-grow-shadow"
                  src={carDets.fullImage}
                  alt=""
                />
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{carDets.name}</h3>
                <div className="rating">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={carDets.rating}
                  />
                  <div className="review-no">{carDets.reviews} reviews</div>
                </div>
                <p className="product-description">{carDets.description}</p>

                <div className="row compare">
                  <div className="col-12 text-center">
                    <table className="table">
                      <tbody>
                        <tr>
                          <th scope="row">Manufacturer</th>
                          <td>{carDets.manufacturer}</td>
                        </tr>
                        <tr>
                          <th scope="row">Price</th>
                          <td className='price'>{carDets.price}</td>
                        </tr>
                        <tr>
                          <th scope="row">Model</th>
                          <td>{carDets.model}</td>
                        </tr>
                        <tr>
                          <th scope="row">Year</th>
                          <td>{carDets.year}</td>
                        </tr>
                        <tr>
                        <th scope="row">Colors</th>
                        <td>
                          {carDets.colors.map((color, index) => (
                            <span key={index} className={`color ${color}`} />
                          ))}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <div className="action">
                            <Link to="/" className="go-back btn btn-primary">
                              Go back
                            </Link>
                          </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    carDets: state.car.carDetails
  };
};
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);
