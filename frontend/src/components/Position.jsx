import { useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';

function Location() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null && null;
}

export default Location;