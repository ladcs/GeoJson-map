import api from "../services/api";

export function handleOnClickToAddPointOnPolygon(
  geoJson,
  setGeoJson,
  points2Polygon,
  setPoints2Polygon) {
  const { coordenates } = geoJson;
  if (coordenates === '') return;
  const coordinates = coordenates.split(',').map(c => parseFloat(c));
  setPoints2Polygon([...points2Polygon, coordinates]);
  setGeoJson({ ...geoJson, coordenates: '' });
}

export function handleOnClickToAddMultiPolygon(
  geoJson,
  setGeoJson,
  points2Polygon,
  setPoints2Polygon,
  multiPolygonPoint,
  setMultPolygonPoint) {
    if (points2Polygon < 3) return;
    setMultPolygonPoint([...multiPolygonPoint, [...points2Polygon]]);
    setPoints2Polygon([]);
    setGeoJson({ ...geoJson, coordenates: '' });
  }

export function handleOnClickAddPolygon(
  geoJson,
  setGeoJson,
  multiPolygonPoint,
  points2Polygon) {
    if(multiPolygonPoint.length !== 0 || points2Polygon > 2) {
    const geometry = multiPolygonPoint.length > 1 ? {
      type: 'multiPolygon',
      coordinates: multiPolygonPoint,
    } : {
      type: 'polygon',
        coordinates: [...multiPolygonPoint],
      };
        
    const { name, color } = geoJson;
        
    const feature = {
      ...geometry,
      name,
      color,
    };

    api.post('/polygon', feature);

    setGeoJson({
      name: '',
      coordenates: '',
      color: ''
    });
  }
}