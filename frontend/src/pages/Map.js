import React, { useContext, useEffect} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Location from '../components/Position';
import GetPointAndPolygon from '../components/GetPointAndPolygon';
import NavMap from '../components/NavMap'
import MapContext from '../context/mapContext';
import '../styles/map.css';

function Map() {
  const position = ([0, 0]);
  const { logged } = useContext(MapContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!logged) navigate('/');
  }, [logged]);

  return (
  <div className='flexbox'>
    <NavMap />
    <MapContainer className='test' center={ position } zoom={ 13 } scrollWheelZoom={ true }>
      <Location />
      <GetPointAndPolygon />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  </div>
  );
}

export default Map;
