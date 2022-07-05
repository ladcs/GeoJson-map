import React, { useContext, useEffect } from 'react';
import { FiDelete } from 'react-icons/fi';
import { Polygon, Popup } from 'react-leaflet';
import MapContext from '../context/mapContext';
import api from '../services/api';

function MapCollectionPolygon() {
  const { polygon, setPolygon } = useContext(MapContext);
  const deletePolygon = (id) => {
    api.delete(`/polygon/${id}`).then(() =>{
      api.get('/polygon').then(res => {
        const { data } = res;
        if(!data) setPolygon([]);
        setPolygon(data);
      });
    });
  }
  useEffect(() => {
    api.get('/polygon').then(res => {
      const { data } = res;
      if(!data) return;
      setPolygon(data);
    }).catch(() => {
      console.log('sem polígonos');
    });
  }, []);
  
  return ( Object.keys(polygon).length === 0 ? null : (
    <div>
    { 
    !polygon.features ? (<Polygon
      pathOptions={ { color : polygon.properties.color } }
      positions={ polygon.geometry.coordinates } >
      <Popup>
        { polygon.properties.name }
        <button onClick={ () => {
              deletePolygon(polygon._id)
            } }><FiDelete/></button>
      </Popup>
      </Polygon>) : (
      polygon.features.map((p, i) => (<Polygon
        key={ i }
        pathOptions={ { color : p.properties.color } }
        positions={ p.geometry.coordinates } >
        <Popup>
          { p.properties.name }
          <button onClick={ () => {
            deletePolygon(p.properties._id)
          } }><FiDelete/></button>
        </Popup>
        </Polygon>
        )
      )
    )
    }
  </div>)
  );
}

export default MapCollectionPolygon;