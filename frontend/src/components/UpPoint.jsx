import React, { useContext, useState } from 'react';
import Input from './Input';
import api from '../services/api';
import MapContext from '../context/mapContext';
import PropTypes from 'prop-types';

export default function UpPoint({ coordinates, id }) {
  const { setPoints } = useContext(MapContext);
  const editPoint = (id, upPoint) => {
    if (upPoint.newName !== '') {
      console.log(upPoint);
      api.patch(`/point/${id}`, upPoint).then(() =>{
        api.get('/point').then(res => {
          const { data } = res;
          if(!data) return;
          setPoints(data);
        });
      });
    }
  }
  const [newName, setNewName] = useState('');
  const handleOnChange = ({ target }) => {
    const { value } = target;
    setNewName(value);
  };
  return(
    <div>

    <Input
    label='nome editado'
    type='text'
    value={ newName }
    onChange={ handleOnChange }
    className='upPointName'
    />
    <button
    type='button'
    onClick={ () => editPoint(id, { name: newName, coordinates }) }
    >
      Atualizar ponto
    </button>
    </div>
  )
}

UpPoint.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.string,
}