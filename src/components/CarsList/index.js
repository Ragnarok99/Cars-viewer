import React, {PropTypes} from 'react';
import CarItem from '../CarItem'

const CarsList = ({cars, compare, elementsCompared, idsCompared }) => {
  return (
    <div>
      <div className='row'>
        {cars.map(car => 
          <CarItem elementsCompared= {elementsCompared} idsCompared={idsCompared} key={car.id} compare={compare} car={car} />
      )}
      </div>
    </div>
  )
}

CarsList.PropTypes = {
  cars: PropTypes.array,
  compare: PropTypes.func,
  elementsCompared: PropTypes.number,
  idsCompared: PropTypes.array
};

export default CarsList;