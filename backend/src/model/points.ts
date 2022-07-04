import { model } from 'mongoose';

import { IPoint } from '../schema/IGeoJsonPoint';

import pointSchema from '../schema/GeoJsonPoint';

export default class PolygonModel {
  constructor(private _model = model('point', pointSchema)) { }

  public async getPolygon() {
    const point = await this._model.find();
    return point;
  }

  public async created(point: IPoint) {
    const created = await this._model.create(point);
    return created;
  }
}

