import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import MapContext from "../context/mapContext";
import Input from "../components/Input";
import {
  handleOnClickAddPolygon,
  handleOnClickToAddMultiPolygon,
  handleOnClickToAddPointOnPolygon } from "../utils/polygon";

function Polygon() {
  const [geoJson, setGeoJson] = useState({
    name: '',
    coordenates: '',
    color: ''
  });
  const {
    polygon,
    setPolygon,
    points2Polygon,
    setPoints2Polygon,
    multiPolygonPoint,
    setMultPolygonPoint/*, logged*/ } = useContext(MapContext);

  const navigate = useNavigate();
/*  useEffect(() => {
    if (!logged) navigate('/');
  }, [logged]); */


  const { name, coordenates, color } = geoJson;

  const toMap = () => {
    navigate('/map');
  }

  const handleOnChange = ({ target }, toChange, funcChange) => {
    const { id, value } = target;
    funcChange({
      ...toChange,
      [id]: value,
    });
  };

  return (
    <div>
      <main className="d-flex flex-column justify-content-center align-items-center">
        <h2>Posição em GeoJson</h2>
        <form className="d-flex flex-column align-items-center login-form mt-4">
          <Input
            type="text"
            label="nome do local"
            value={ name }
            id="name"
            onChange={ (e) => handleOnChange(e, geoJson, setGeoJson) }
            className="border-top border-right border-left p-2"
            />
          <Input
            type="text"
            label="cor do polygon"
            value={ color }
            id="color"
            onChange={ (e) => handleOnChange(e, geoJson, setGeoJson) }
            className="border-top border-right border-left p-2"
            />
          <Input
            type="text"
            value={ coordenates }
            label="coordenadas"
            id="coordenates"
            onChange={ (e) => handleOnChange(e, geoJson, setGeoJson) }
            className="border-top border-right border-left p-2"
            />
          <button
            type="button"
            onClick={ () => handleOnClickToAddPointOnPolygon(geoJson, setGeoJson, points2Polygon, setPoints2Polygon) }
            className="buttonLogin"
            >
            Adicionar ponto no Polygon.
          </button>
          <button
            type="button"
            onClick={ () => handleOnClickToAddMultiPolygon(
              geoJson,
              setGeoJson,
              points2Polygon,
              setPoints2Polygon,
              multiPolygonPoint,
              setMultPolygonPoint) }
            className="buttonLogin"
            >
            Adicionar próximo Polygon em um MultiPolygon.
          </button>
          <button
            type="button"
            onClick={ () => handleOnClickAddPolygon(
              geoJson,
              setGeoJson,
              polygon,
              setPolygon,
              multiPolygonPoint) }
            className="buttonLogin"
            >
            Salvar polygon ou multiPolygon.
          </button>
        </form>
      </main>
      <p> Para o cadastro de posição, digite as coordenadas com números separados por vírgula.</p>
      <p> Ficando da seguinte maneira x,y, onde x é latitude e y é longitude</p>
      <p> Como exemplo: 51.505, -0.09</p>
      <p> Quando apertado o botão { `"Adicionar próximo Polygon em um multiPolygon",` } o registro do polygon anterior já está pronto para salvar.</p>
      <p> Será salvo algum Polygon desde que tenha sido apertado o botão { `"Adicionar próximo Polygon em um multiPolygon"` }! </p>
      <button 
      type="button"
      onClick={ toMap }
      className="buttonLogin"
      >
        Para o mapa!
      </button>
    </ div>
  );
}

export default Polygon;