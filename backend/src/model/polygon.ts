import { model } from 'mongoose';

import { IPolygon } from '../schema/IGeoJsonPolygon';

import polygonSchema from '../schema/GeoJsonPolygon';

export default class PolygonModel {
  constructor(private _model = model('polygon', polygonSchema)) { }

  public async getPolygon() {
    const polygon = await this._model.find();
    console.log(polygon);
    return polygon;
  }

  public async created(polygon: IPolygon) {
    console.log(polygon);
    const created = await this._model.create(polygon);
    console.log(created);
    return created;
  }
}

