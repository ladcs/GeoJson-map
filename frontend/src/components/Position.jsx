import { useMap } from 'react-leaflet';
import { useContext, useEffect } from 'react';
import MapContext from '../context/mapContext';

function Location() {
  const { position, setPosition } = useContext(MapContext);
  const { setCoordinates, newPoint, newPolygon } = useContext(MapContext)

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
    if (newPoint || newPolygon) {
      map.on('click', (e)=> setCoordinates(
        [e.latlng.lat, e.latlng.lng]));
    }
  }, [map, newPoint, newPolygon]);

  return position === null && null;
}

export default Location;