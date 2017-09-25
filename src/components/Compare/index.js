import React from "react";
import "./style.css";
const Compare = ({ cars }) => {
  return (
    <div className="row compare">
      <div className="col-12 text-center">
        <table className="table">
          <thead className="thead-default">
            <tr>
              <th />
              {cars.map(car => (
                <th style={{ textAlign: "center" }} key={car.id}>
                  {car.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              {cars.map(car => (
                <td key={car.id} className="text-center">
                  {car.price}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Colors</th>
              {cars.map(car => (
                <td key={car.id}>
                  {car.colors.map((color, index) => (
                    <span key={index} className={`color ${color}`} />
                  ))}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Manufacturer</th>
              {cars.map(car => <td key={car.id}>{car.manufacturer}</td>)}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
