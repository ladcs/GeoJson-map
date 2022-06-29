// import api from "../services/api";

export function handleOnClickToAddPoint(geoJson, setGeoJson, points, setPoints) {
  const { coordenates, name } = geoJson;
  if (coordenates === '' || name === '') return;
  const coordinates = coordenates.split(',').map(c => parseFloat(c));
  const geometry = {
    type: "Point",
    coordinates
  }
  const toTestPointOrCollection = {
    type: 'Feature',
    properties:{
      name
    },
    geometry,
  };

  const notExistFeaturesCollection = !points.features;
  if (Object.keys(points).length === 0) {
    setPoints(toTestPointOrCollection);
  } else if(notExistFeaturesCollection) {
    const toAPIPoint = {
      type: 'featuresCollection',
      features: [points, toTestPointOrCollection]
    }
    setPoints(toAPIPoint)
  } if (!notExistFeaturesCollection) {
    const toAPIPoint = {
      type: 'featuresCollection',
      features: [...points.features, toTestPointOrCollection]
    }
    setPoints(toAPIPoint);
  }
  /*api
    .post('/point', toAPIGeoJson)
    .then(res => res.json())
    .then(console.log('point add'))
    .catch(err => console.log(err));*/
  setGeoJson({ name: '', coordenates: '' });
}