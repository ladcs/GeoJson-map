import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapContext from './mapContext';

function Provider ({ children }) {
  const [itsPoints, setItsPoints] = useState('both');
  const [toMap, setToMap] = useState(true);
  const [logged, setLogged] = useState(false);
  const [itsMap, setItsMap] = useState('map');
  const [points, setPoints] = useState({});
  const [polygon, setPolygon] = useState({});
  const [points2Polygon, setPoints2Polygon] = useState([]);
  const [multiPolygonPoint, setMultPolygonPoint] = useState([]);
  const [position, setPosition] = useState(null);
  const [newPoint, setNewPoint] = useState(false);
  const [newPolygon, setNewPolygon] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  const contextValue = {
    coordinates,
    setCoordinates,
    newPolygon,
    setNewPolygon,
    newPoint,
    setNewPoint,
    position,
    setPosition,
    toMap,
    setToMap,
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