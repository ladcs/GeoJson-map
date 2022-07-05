import React, { useContext, useEffect} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Location from '../components/Position';
import GetPointAndPolygon from '../components/GetPointAndPolygon';
import NavMap from '../components/NavMap'
import MapContext from '../context/mapContext';
import '../styles/map.css';
import NewPoint from '../components/NewPoint';
import NewPolygon from '../components/newPolygon';

function Map() {
  const { logged, newPoint, newPolygon, position } = useContext(MapContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!logged) navigate('/');
  }, [logged]);

  return (
  <div className='flexbox'>
    <NavMap />
    { newPoint && <NewPoint /> }
    { newPolygon && <NewPolygon />}
    <MapContainer className='test' center={ !position ? [0,0]: position } zoom={ 13 } scrollWheelZoom={ true }>
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
