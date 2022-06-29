// import api from "../services/api";

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
  polygon,
  setPolygon,
  multiPolygonPoint) {
    if(multiPolygonPoint.length !== 0) {
    const geometry = multiPolygonPoint.length > 1 ? {
      type: 'multiPolygon',
      coordinates: multiPolygonPoint,
    } : {
      type: 'polygon',
        coordinates: [...multiPolygonPoint],
      };
        
    const { name, color } = geoJson;
        
    const feature = {
      type: 'feature',
      geometry,
        properties: {
          name,
          color,
        },
    };
        
    const notExistFeatures = !polygon.features;
    if (Object.keys(polygon).length === 0) {
      setPolygon(feature);
    } else if (notExistFeatures) {
      const featuresCollection = {
        type: 'featuresCollection',
        features: [polygon, feature]
      }
      setPolygon(featuresCollection);
    } else {
      const featuresCollection = {
        type: 'featuresCollection',
        features: [...polygon.features, feature]
      }
      setPolygon(featuresCollection);
    }
    setGeoJson({
      name: '',
      coordenates: '',
      color: ''
    });
  }
}