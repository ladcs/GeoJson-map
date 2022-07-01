import React, { useContext, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import api from '../services/api';
import MapContext from '../context/mapContext';

function MapCollectionPoints() {
  const { points, setPoints } = useContext(MapContext);
  useEffect(() => {
    api.get('/point').then(res => {
      const { data } = res;
      if(!data) return;
      setPoints(data);
    });
  },[]);
  return ( Object.keys(points).length === 0 ? null : (
    <div>
    { 
    !points.features ? (<Marker position={ points.geometry.coordinates }>
      <Popup>
        { points.properties.name }
      </Popup>
    </Marker>) : (
      points.features.map((p) => (
        <Marker
        position={ p.geometry.coordinates }
        key={ p.geometry.coordinates }>
          <Popup>
            { p.properties.name }
          </Popup>
        </Marker>
        )
      )
    )
    }
  </div>)
  );
}

export default MapCollectionPoints;