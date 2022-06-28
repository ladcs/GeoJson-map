import React, { useContext } from 'react';
import MapContext from '../context/mapContext';
import '../styles/default.css';
import { handleClickItsPoints } from '../utils/navMap';

const LabsOptions = () => {
  const { itsPoints, setItsPoints,  } = useContext(MapContext);
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
          onClick={() => handleClickItsPoints(itsPoints, setItsPoints) }
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