import api from "../services/api";
import React from "react";

export function handleOnClickToAddPoint(navegate, geoJson, setGeoJson, points, setPoints) {
  const { coordenates, name } = geoJson;
  if (name === '' || coordenates === '') return <p>nome e ponto deve existir</p>
  const arrayCoordenates = coordenates.split(',');
  const geometry = {
    type: "Point",
    coordinates: [parseFloat(arrayCoordenates[0]), parseFloat(arrayCoordenates[1])],
  }
  const toAPIGeoJson = {
    type: 'Feature',
    properties:{
      name
    },
    geometry,
  };
  if (points.filter((point) => point
    .geometry
    .coordinates === geometry
      .coordinates)
      .lenght === 0) {
    setPoints([...points, toAPIGeoJson]);
    api
    .post('/point', toAPIGeoJson)
    .then(res => res.json())
    .then(console.log('point add'))
    .catch(err => console.log(err));
  }
  setGeoJson({ name: '', coordenates: '' });
  navegate('/map');
}

export function handleOnClickToAddPoints(
navegate,
geoJson,
setGeoJson,
collectionPoints,
setCollectionPoints) {

  const { manyCoordenates, names } = geoJson;
  if (names === '' || manyCoordenates === '') return <p>deve ter pelo menos um ponto e um nome</p>
  const arrayCoordenates = manyCoordenates.split(';');
  const arrayNames = names.split('; ');

  const arrayCoordenate = arrayCoordenates.map(coord => coord.split(',').map(c => parseFloat(c)));

  const features = arrayNames.map((name, index) => ({
    type: 'Feature',
    properties: {
      name
    },
    geometry: {
      type: 'Point',
      coordinates: arrayCoordenate[index],
    }
  }));

  const toAPIGeoJson = {
    type: 'FeatureCollection',
    features,
  };

  setCollectionPoints([...collectionPoints, toAPIGeoJson]);
    api
    .post('/points', toAPIGeoJson)
    .then(res => res.json())
    .then(console.log('collection points add'))
    .catch(err => console.log(err));
  setGeoJson({ name: '', coordenates: '' });
  navegate('/map');
}