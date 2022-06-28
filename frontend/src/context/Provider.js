import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapContext from './mapContext';

function Provider ({ children }) {
  const [itsPoints, setItsPoints] = useState('point');
  const [logged, setLogged] = useState(false);
  const [itsMap, setItsMap] = useState('map');

  const contextValue = {
    itsMap,
    setItsMap,
    itsPoints,
    setItsPoints,
    logged,
    setLogged
  };

  return (
    <MapContext.Provider value={ contextValue }>
      { children }
    </MapContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;