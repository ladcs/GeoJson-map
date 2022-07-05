import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MapContext from '../context/mapContext';
import { handleClickItsPoints } from '../utils/navMap';
import '../styles/default.css';

function handleClickPosition(endpoint, navegate) {
  navegate(endpoint);
}

const LabsOptions = () => {

  const { newPoint, setNewPoint, newPolygon, setNewPolygon, setCoordinates } = useContext(MapContext);

  const navegate = useNavigate();
  
  const { itsPoints, setItsPoints } = useContext(MapContext);
  return (
    <nav className='centerOptions'>
      <ul>
        <li>
          <button
          onClick={() => handleClickPosition('/register', navegate) }
          >
            <p>
            Regitrar novo Usuário
            </p>
          </button>
        </li>
        <li>
          <button
          onClick={ ()=> {
            setNewPoint(!newPoint);
            setNewPolygon(false);
            setCoordinates([]);
          } }
          >
            <p>
              Cadastrar Posições
            </p>
          </button>
        </li>
        <li>
          <button
          onClick={ ()=> {
            setNewPolygon(!newPolygon);
            setNewPoint(false);
            setCoordinates([]);
          } }
          >
            <p>Cadastrar Polígonos</p>
          </button>
        </li>
        <li>
          <button
          onClick={() => handleClickItsPoints(itsPoints, setItsPoints) }
          >
            { itsPoints === 'point' ? <p>Mapa com Posições</p> :
              itsPoints === 'polygon' ? <p>Mapa com Polígonos</p> :
              <p>Mapa com Posições e Polígonos</p> }
          </button>
        </li>
      </ul> 
    </nav>
  );
}

export default LabsOptions;