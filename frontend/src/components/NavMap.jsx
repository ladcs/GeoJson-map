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
          onClick={ ()=> handleClickPosition('/point', navegate) }
          >
            <p>
              Cadastrar Posições
            </p>
          </button>
        </li>
        <li>
          <button
          onClick={() => handleClickPosition('/polygon', navegate) }
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