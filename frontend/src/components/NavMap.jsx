import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MapContext from '../context/mapContext';
import '../styles/default.css';
import { handleClickItsPoints } from '../utils/navMap';

function handleClickPosition(endpoint, navegate) {
  navegate(endpoint);
}
const LabsOptions = () => {

  const navegate = useNavigate();
  
  const { itsPoints, setItsPoints } = useContext(MapContext);
  return (
    <div className='centerOptions'>
      <ul>
        <li>
          <button
          onClick={() => handleClickItsPoints(itsPoints, setItsPoints) }
          >
            Regitrar novo Usuário
          </button>
        </li>
        <li>
          <button
          onClick={ ()=> handleClickPosition('/point', navegate) }
          >
            Cadastrar Posições
          </button>
        </li>
        <li>
          <button
          onClick={() => handleClickItsPoints(itsPoints, setItsPoints) }
          >
            Cadastrar Polígonos
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
    </div>
  );
}

export default LabsOptions;