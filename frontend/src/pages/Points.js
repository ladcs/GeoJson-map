import React, { useState, useContext } from 'react';
import Input from '../components/Input';
import { useNavigate } from 'react-router-dom';
import MapContext from '../context/mapContext';
import { handleOnClickToAddPoint, handleOnClickToAddPoints } from '../utils/point';

function Login() {
  const [geoJson, setGeoJson] = useState({
    name: '',
    coordenates: '',
  });

  const [collection, setCollection] = useState({
    names: '',
    manyCoordenates: '',
  });

  const { names, manyCoordenates } = collection;

  const { points, setPoints, collectionPoints, setCollectionPoints } = useContext(MapContext);

  const navigate = useNavigate();
  const { name, coordenates } = geoJson;

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
            onClick={ () => handleOnClickToAddPoint(navigate, geoJson, setGeoJson, points, setPoints) }
            className="buttonLogin"
            value="Login"
            >
            adicionar posição.
          </button>
        </form>
      </main>
      <p> Para o cadastro de posição, digite as coordenadas com números separados por vírgula.</p>
      <p> Ficando da seguinte maneira x,y</p>
      <p> como exemplo: 51.505, -0.09</p>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h2>Posição em GeoJson</h2>
        <form className="d-flex flex-column align-items-center login-form mt-4">
          <Input
            type="text"
            label="nome do local"
            value={ names }
            id="names"
            onChange={ (e) => handleOnChange(e, collection, setCollection) }
            className="border-top border-right border-left p-2"
            />
          <Input
            type="text"
            value={ manyCoordenates }
            label="coordenadas"
            id="manyCoordenates"
            onChange={ (e) => handleOnChange(e, collection, setCollection) }
            className="border-top border-right border-left p-2"
            />
          <button
            type="button"
            onClick={ () => handleOnClickToAddPoints(
              navigate,
              collection,
              setCollection,
              setCollectionPoints,
              collectionPoints) }
            className="buttonLogin"
            value="Login"
            >
            adicionar posição.
          </button>
        </form>
      </main>
      <p> Para o cadastro de Feature Collection Points, digite as coordenadas com números separados por vírgula.</p>
      <p> Ficando da seguinte maneira x,y;a,b;c,d...</p>
      <p> Onde para a primeira posição x é o primeiro valor e y é o segundo</p>
      <p> Como exemplo: 51.505, -0.09; 52.1, -0.09; 60,34</p>
      <p> Para os nomes digíte o nome separado do outro com ;</p>
      <p> Ficando &ldquo;nome 1; nome 2	&rdquo;</p>
    </div>
  );
}

export default Login;