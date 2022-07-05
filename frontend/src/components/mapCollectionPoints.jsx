import React, { useContext, useEffect, useState } from 'react';
import { FiDelete } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { Marker, Popup } from 'react-leaflet';
import api from '../services/api';
import MapContext from '../context/mapContext';
import UpPoint from '../components/UpPoint';

function MapCollectionPoints() {
  const { points, setPoints } = useContext(MapContext);
  const [edit, setEdit] = useState(false);
  const deletePoint = (id) => {
    api.delete(`/point/${id}`).then(() =>{
      api.get('/point').then(res => {
        const { data } = res;
        if(!data) setPoints([]);
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
        <button onClick={ () => {
              deletePoint(points._id)
            } }><FiDelete/></button>
              <button onClick={ () => setEdit(!edit) } >
                <BiEditAlt/>
              </button>
              { !edit && <UpPoint
              coordinates={ points.geometry.coordinates }
              id={ points._id }
              /> }
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
              <button onClick={ () => setEdit(!edit) } >
                <BiEditAlt/>
              </button>
              { !edit && <UpPoint
              coordinates={ p.geometry.coordinates }
              id={ p.properties._id }
              /> }
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