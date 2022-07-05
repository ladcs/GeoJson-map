import api from "../services/api";

export function handleOnClickToAddPointOnPolygon(
  coordinates,
  points2Polygon,
  setPoints2Polygon) {
  setPoints2Polygon(...points2Polygon, [coordinates[0], coordinates[1]]);
  setPoints2Polygon([]);
}

export function handleOnClickToAddMultiPolygon(
  points2Polygon,
  setPoints2Polygon,
  multiPolygonPoint,
  setMultPolygonPoint,
  setCoordinates) {
    if (points2Polygon < 3) return;
    setMultPolygonPoint([...multiPolygonPoint, [...points2Polygon]]);
    console.log(multiPolygonPoint);
    setPoints2Polygon([]);
    setCoordinates([]);
  }

export function handleOnClickAddPolygon(
  polygons,
  setPolygons,
  setCoordinates,
  multiPolygonPoint,
  setMultPolygonPoint,
  setPolygon
  ) {
    if(multiPolygonPoint.length !== 0) {
    const geometry = multiPolygonPoint.length > 1 ? {
      type: 'multiPolygon',
      coordinates: multiPolygonPoint,
    } : {
      type: 'polygon',
      coordinates: [...multiPolygonPoint],
    };
      
    const { name, color } = polygons;
      
    if (name === '' || color === '') {
      setCoordinates([]);
      setMultPolygonPoint([]);
      return;
    }

    const feature = {
      ...geometry,
      name,
      color,
    };

    console.log(feature);

    api.post('/polygon', feature).then(() => {
      api.get('/polygon').then((res => {
        const { data } = res;
        if(!data) return;
        setPolygon(data);
      }))
    });

    setPolygons({
      name: '',
      color: ''
    });
    setCoordinates([]);
    setMultPolygonPoint([]);
  }
}