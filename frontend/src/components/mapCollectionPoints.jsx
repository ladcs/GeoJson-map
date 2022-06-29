import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import MapContext from '../context/mapContext';

function MapCollectionPoints() {
  const { points } = useContext(MapContext);
  console.log(points);
  console.log(Object.keys(points));
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