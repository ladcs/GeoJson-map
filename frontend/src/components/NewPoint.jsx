import React, { useContext, useState } from 'react';
import MapContext from '../context/mapContext';
import { handleOnClickToAddPoint } from '../utils/point';
import Input from './Input';

export default function NewPoint() {
  const [point, setPoint] = useState({ name: '' });

  const { coordinates, setCoordinates, setPoints } = useContext(MapContext);

  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    setPoint({
      ...point,
      [id]: value,
    });
  };

  const { name } = point;

  return(
    <div className='pointName'>
      <Input
      label='Nome da posição'
      type='text'
      value={ name }
      id='name'
      onChange={ handleOnChange }
      className='PointName'
      />
      <p className='coordinates'>coordenadas:</p>
      <p>latitude: { coordinates.length > 1 && coordinates[0] }</p>
      <p>longitude: { coordinates.length > 1 && coordinates[1]}</p>
      <button
      type="button"
      onClick={ () => handleOnClickToAddPoint({ ...point, coordinates }, setPoint, setCoordinates, setPoints) }
      className="addNewPoint"
      value="addPoint"
      >
        Nova Posição.
      </button>
    </div>
  )
}