import api from "../services/api";

export function handleOnClickToAddPoint(point, setPoint, setCoordinates, setPoints) {
  const { coordinates, name } = point;
  if (coordinates === [] || name === '') return;

  api.post('/point', { name, coordinates }).then(() =>{
    api.get('/point').then(res => {
    const { data } = res;
    if(!data) return;
      setPoints(data);
    });
  });

  setPoint({ name: '' });
  setCoordinates([]);
}