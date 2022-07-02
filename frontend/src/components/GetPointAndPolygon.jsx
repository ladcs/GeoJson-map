import React, { useContext } from 'react';
import MapContext from '../context/mapContext';
import MapCollectionPoints from './mapCollectionPoints';
import MapCollectionPolygon from './mapCollectionPolygon';

function GetPointAndPolygon() {
  const { itsPoints } = useContext(MapContext);
  return (<div>
    {
      itsPoints === 'both' ?
        <div>
          <MapCollectionPoints />
          <MapCollectionPolygon />
        </div> : itsPoints === 'polygon' ? <MapCollectionPolygon /> : <MapCollectionPoints />
      }
  </div>)
}

export default GetPointAndPolygon;