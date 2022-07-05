import React, { useContext, useEffect } from 'react';
import { FiDelete } from 'react-icons/fi';
import { Marker, Popup } from 'react-leaflet';
import api from '../services/api';
import MapContext from '../context/mapContext';
function MapCollectionPoints() {
  const { points, setPoints } = useContext(MapContext);
  const deletePoint= (id) => {
    api.delete(`/point/${id}`).then(() =>{
      api.get('/point').then(res => {
        const { data } = res;
        if(!data) return;
        setPoints(data);
      });
    });
  }
  useEffect(() => {
    api.get('/point').then(res => {
      const { data } = res;
      if(!data) return;
      setPoints(data);
    }).catch(() => {
      console.log('sem pontos');
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
            <div className='popup'>
            { p.properties.name }
            <button onClick={ () => {
              deletePoint(p.properties._id)
            } }><FiDelete/></button>
            </div>
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