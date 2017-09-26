import React, { PropTypes } from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const CarItem = ({ car, compare, elementsCompared, idsCompared }) => {
  return (
    <div key={car.id} className="col-sm-6 col-md-4 hvr-float">
      <div className="card">
        <img
          className="hvr-fade hvr-shadow-radial"
          src={car.image}
          alt="CarImage"
          style={{ width: "100%" }}
        />
        <div className="container">
          <span className="product_price">{car.price}</span>
          <h4>
            <strong>{car.name}</strong>
          </h4>
          <p>
            <strong>{car.manufacturer}</strong>
          </p>
          <p>{car.year}</p>
        </div>
        <div className="buttons ">
          <div className="see-details">
            <Link
              style={{ width: "100%" }}
              to={`details/${car.id}`}
              className=""
            >
              See Details
            </Link>
          </div>
          <button
            disabled={
              !idsCompared.find(idCar => idCar === car.id) &&
              elementsCompared === 3
            }
            style={{ width: "100%" }}
            onClick={() => compare(car)}
            className="btn btn-outline-success"
          >
            {idsCompared.find(idCar => idCar === car.id) ? "Remove" : "Compare"}
          </button>
        </div>
      </div>
    </div>
  );
};

CarItem.PropTypes = {
  car: PropTypes.object,
  compare: PropTypes.func,
  elementsCompared: PropTypes.number,
  idsCompared: PropTypes.array
};

export default CarItem;
