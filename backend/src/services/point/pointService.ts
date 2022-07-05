import { AuxToPoint } from '../../utils/auxToPoint';
import { IGeometryAndName } from '../../schema/IGeoJsonPoint';
import Model from '../../model/points';
import NoContent from '../../error/NoContent';

export default class PointService {
  private _auxToPoint: AuxToPoint;
  private _model: Model;

  constructor() { 
    this._model = new Model();
    this._auxToPoint = new AuxToPoint();
  }

  public async insertPoint(featurePoint: IGeometryAndName) {
    const point = this._auxToPoint.coordinates(featurePoint);
    const inserted = await this._model.created(point);
    return inserted;
  }

  public async delete(id: string) {
    await this._model.delete(id);
    return { deleted: 'ok'};
  }

  public async getPoints() {
    const points = await this._model.getPoints()
    if(points.length > 1) {
      const collectionPoints = this._auxToPoint.collectionPoints(points);
      return collectionPoints;
    }
    if(points.length === 1) {
      return points[0];
    }
    throw new NoContent('No Point')
  }
}