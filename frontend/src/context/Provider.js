import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapContext from './mapContext';

function Provider ({ children }) {
  const [itsPoints, setItsPoints] = useState('both');
  const [logged, setLogged] = useState(false);
  const [itsMap, setItsMap] = useState('map');
  const [points, setPoints] = useState({});
  const [polygon, setPolygon] = useState([]);
  const [points2Polygon, setPoints2Polygon] = useState([]);
  const [multiPolygonPoint, setMultPolygonPoint] = useState([]);
  
  const contextValue = {
    multiPolygonPoint,
    setMultPolygonPoint,
    points2Polygon,
    setPoints2Polygon,
    polygon,
    setPolygon,
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