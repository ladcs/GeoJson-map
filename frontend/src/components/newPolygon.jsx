import React, { useContext, useEffect, useState } from 'react';
import MapContext from '../context/mapContext';
import { handleOnClickAddPolygon, handleOnClickToAddMultiPolygon } from '../utils/polygon';
import Input from './Input';

export default function NewPolygon() {
  const [polygons, setPolygons] = useState({ name: '', color: '' });

  const {
    coordinates,
    setCoordinates,
    points2Polygon,
    setPoints2Polygon,
    multiPolygonPoint,
    setMultPolygonPoint,
    setPolygon,
  } = useContext(MapContext);

  const handleOnChange = ({ target }) => {
    const { id, value } = target;
    setPolygons({
      ...polygons,
      [id]: value,
    });
  };

  useEffect(()=> {
    if(coordinates.length > 1 && points2Polygon[points2Polygon.length -1 ] !== coordinates) {
      setPoints2Polygon([...points2Polygon, coordinates]);
    }
  }, [coordinates])

  const { name, color } = polygons;

  return(
    <div className='pointName'>
      <Input
      label='Nome do polígono'
      type='text'
      value={ name }
      id='name'
      onChange={ handleOnChange }
      className='PointName'
      />
      <Input
      label='Cor'
      type='text'
      value={ color }
      id='color'
      onChange={ handleOnChange }
      className='PointName'
      />
      <p className='coordinates'>coordenadas: [{ points2Polygon.map(c => `[${Math.round(c[0]*1000)/1000}, ${Math.round(c[1]*100)/100}];`) }]</p>
      <button
        type='button'
        onClick={ () => handleOnClickToAddMultiPolygon(
          points2Polygon,
          setPoints2Polygon,
          multiPolygonPoint,
          setMultPolygonPoint,
          setCoordinates) }
          className='addNewPoint'
          value='addCoordinates'>
        Adicionar Coordenadas ao Polígono.
      </button>
      <button
      type="button"
      onClick={ () => {
        setMultPolygonPoint([...multiPolygonPoint, [...points2Polygon]]);
        console.log(multiPolygonPoint);
        handleOnClickAddPolygon(
        polygons,
        setPolygons,
        setCoordinates,
        multiPolygonPoint,
        setMultPolygonPoint,
        setPolygon
        )
      } }
      className="addNewPoint"
      value="addPolygon"
      >
        Novo Polígono.
      </button>
    </div>
  )
}