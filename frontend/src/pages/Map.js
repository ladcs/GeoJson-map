import React, { useContext /*, useEffect*/ } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
// import { useNavigate } from 'react-router-dom';
import CurrentLocation from '../components/Position';
import NavMap from '../components/NavMap'
import MapContext from '../context/mapContext';
import MapCollectionPoints from '../components/mapCollectionPoints';
import '../styles/map.css';

function Map() {
  const position = ([0, 0]);
  const { /*logged,*/ itsPoints } = useContext(MapContext);
/*  const navigate = useNavigate();
  useEffect(() => {
    if (!logged) navigate('/');
  }, [logged]);*/
  
  return (
  <div className='flexbox'>
    <NavMap />
    <MapContainer center={ position } zoom={ 13 } scrollWheelZoom={ true }>
      <CurrentLocation />
      {
      itsPoints === 'point' || itsPoints === 'both' &&
      <div>
      <MapCollectionPoints />
      </div>
      }
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  </div>
  );
}

export default Map;
