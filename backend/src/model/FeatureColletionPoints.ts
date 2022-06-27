import { model as modelPoint } from "mongoose";
import { IPoints } from '../schema/IGeoJson';
import { colletionPointsSchema } from '../schema/GeoJsonPoints'

export default class PointsModel {
  constructor(private _model = modelPoint('points', colletionPointsSchema)) {}
  public async insertCollectionPoint(colletion: IPoints) {
    const { features } = colletion;
    const inserted = [];
    for (let point = 0; point < features.length; point=+1) {
      const insert = await this._model.create(features[point]);
      inserted.push(insert);
    }
    return inserted;
  }
}
