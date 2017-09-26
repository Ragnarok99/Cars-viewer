import React from 'react';
import CarItem from '../CarItem'

const CarsList = ({cars, compare, elementsCompared }) => {
  return (
    <div>
      <div className='row'>
        {cars.map(car => 
          <CarItem elementsCompared= {elementsCompared} key={car.id} compare={compare} car={car} />
      )}
      </div>
    </div>
  )
}

export default CarsList;