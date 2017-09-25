import React from 'react';
import CarItem from '../CarItem'

const CarsList = ({cars, compare, limit}) => {

  return (
    <div>
      <div className='row'>
        {cars.map(car => 
          <CarItem key={car.id} limit={limit} compare={compare} car={car} />
      )}
      </div>
    </div>
  )
}

export default CarsList;