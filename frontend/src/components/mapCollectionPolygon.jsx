import React, { useContext } from 'react';
import { Polygon, Popup } from 'react-leaflet';
import MapContext from '../context/mapContext';

function MapCollectionPolygon() {
  const { polygon } = useContext(MapContext);
  
  return ( Object.keys(polygon).length === 0 ? null : (
    <div>
    { 
    !polygon.features ? (<Polygon
      pathOptions={{color : polygon.properties.color }}
      positions={polygon.geometry.coordinates} >
      <Popup>{ polygon.properties.name }</Popup>
      </Polygon>) : (
      polygon.features.map((p, i) => (<Polygon
        key={ i }
        pathOptions={{color : p.properties.color }}
        positions={p.geometry.coordinates} >
        <Popup>{ p.properties.name }</Popup>
        </Polygon>
        )
      )
    )
    }
  </div>)
  );
}

export default MapCollectionPolygon;