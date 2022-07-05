import { model } from 'mongoose';

import { IPolygon } from '../schema/IGeoJsonPolygon';

import polygonSchema from '../schema/GeoJsonPolygon';

export default class PolygonModel {
  constructor(private _model = model('polygon', polygonSchema)) { }

  public async getPolygon() {
    const polygon = await this._model.find();
    return polygon;
  }

  public async created(polygon: IPolygon) {
    const created = await this._model.create(polygon);
    return created;
  }

  public async delete(_id: string) {
    await this._model.findByIdAndDelete(_id);
  }
}

