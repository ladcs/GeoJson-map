import { model as modelPoint } from 'mongoose';
import { pointSchema } from '../schema/GeoJsonPoints'
import { IPoint } from '../schema/IGeoJson';

export default class PointsModel {
  constructor(private _model = modelPoint('points', pointSchema)) {}
  public async insertPoint(featurePoint: IPoint) {
    const inserted = await this._model.create(featurePoint);
    return inserted;
  }

  public async getPoints() {
    const points = await this._model.find();
    return points;
  }
}
