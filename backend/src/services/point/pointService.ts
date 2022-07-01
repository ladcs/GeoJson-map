import { AuxToPoint } from '../../utils/auxToPoint';
import ModelPoint from '../../database/models/pointcollections'
import { IPoint } from '../../schema/Point';
import NoContent from '../../error/NoContent';

export default class PointService {
  private _auxToPoint: AuxToPoint;

  constructor() { 
    this._auxToPoint = new AuxToPoint();
  }

  public async insertPoint(featurePoint: IPoint) {
    const { name, coordinates } = featurePoint;
    const { longitude, latitude } = this._auxToPoint.coordinates(coordinates);
    const inserted = await ModelPoint.create({ name, longitude, latitude });
    return inserted;
  }

  public async getPoints() {
    const points = await ModelPoint.findAll();
    if(points.length > 1) {
      const collectionPoints = this._auxToPoint.collectionPoints(points)
      return collectionPoints;
    }
    if(points.length === 1) {
      const point = this._auxToPoint.point(points);
      return point;
    }
    throw new NoContent('No Point')
  }
}