import { model as modelPoint, Types } from 'mongoose';
import NotFound from '../error/NotFound';
import { pointSchema } from '../schema/GeoJsonPoints'
import { IPoint } from '../schema/IGeoJson';

export default class PointsModel {
  constructor(private _model = modelPoint('points', pointSchema)) {}

  public async insertPoint(featurePoint: IPoint): Promise<IPoint & { _id: Types.ObjectId}> {
    const inserted = await this._model.create(featurePoint);
    return inserted;
  }

  public async getPoints(): Promise<Array<IPoint & { _id: Types.ObjectId}>> {
    const points = await this._model.find();
    return points;
  }

  public async updatePoint(_id: string, point: Partial<IPoint>): Promise<void> {
    await this._model.updateOne({ _id }, { ...point });
  }

  public async deletePoint(_id: string): Promise<void> {
    await this._model.deleteOne({ _id });
  }

  public async getById(_id:string): Promise<IPoint & { _id: Types.ObjectId}> {
    const point = await this._model.findOne({ _id });
    if(!point) throw new NotFound('point not exist');
    return point;
  }
}
