import api from "../services/api";

export function handleOnClickToAddPoint(geoJson, setGeoJson/*, points, setPoints*/) {
  const { coordenates, name } = geoJson;
  if (coordenates === '' || name === '') return;

  const coordinates = coordenates.split(',').map(c => parseFloat(c));

  api.post('/point', { name, coordinates });

  setGeoJson({ name: '', coordenates: '' });
}