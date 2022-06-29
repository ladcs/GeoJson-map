import React, { useState, useContext } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import MapContext from '../context/mapContext';
import { handleOnClickToAddPoint } from '../utils/point';

function Points() {
  const [geoJson, setGeoJson] = useState({
    name: '',
    coordenates: '',
  });

  const { points, setPoints } = useContext(MapContext);

  const navigate = useNavigate();
  const { name, coordenates } = geoJson;

  const toMap = () => {
    navigate('/map');
  }

  const handleOnChange = ({ target }, toChange, funcChange) => {
    const { id, value } = target;
    funcChange({
      ...toChange,
      [id]: value,
    });
  };

  return (
    <div>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h2>Posição em GeoJson</h2>
        <form className="d-flex flex-column align-items-center login-form mt-4">
          <Input
            type="text"
            label="nome do local"
            value={ name }
            id="name"
            onChange={ (e) => handleOnChange(e, geoJson, setGeoJson) }
            className="border-top border-right border-left p-2"
            />
          <Input
            type="text"
            value={ coordenates }
            label="coordenadas"
            id="coordenates"
            onChange={ (e) => handleOnChange(e, geoJson, setGeoJson) }
            className="border-top border-right border-left p-2"
            />
          <button
            type="button"
            onClick={ () => handleOnClickToAddPoint(geoJson, setGeoJson, points, setPoints) }
            className="buttonLogin"
            value="Login"
            >
            adicionar posição.
          </button>
        </form>
      </main>
      <p> Para o cadastro de posição, digite as coordenadas com números separados por vírgula.</p>
      <p> Ficando da seguinte maneira x,y, onde x é latitude e y é longitude</p>
      <p> como exemplo: 51.505, -0.09</p>
      <button 
      type="button"
      onClick={ toMap }
      value="toMap"
      className="buttonLogin"
      >
        Para o mapa
      </button>
    </ div>
  );
}

export default Points;