import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapContext from './mapContext';

function Provider ({ children }) {
  const [itsPoints, setItsPoints] = useState('both');
  const [logged, setLogged] = useState(false);
  const [itsMap, setItsMap] = useState('map');
  const [points, setPoints] = useState([]);
  const [collectionPoints, setCollectionPoints] = useState([])

  const contextValue = {
    collectionPoints,
    setCollectionPoints,
    points,
    setPoints,
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