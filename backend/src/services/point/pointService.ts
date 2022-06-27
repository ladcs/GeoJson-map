import ModelPoint from '../../model/FeaturePoint';
import ModelPoints from '../../model/FeatureColletionPoints';
import { IPoint, IPoints } from '../../schema/IGeoJson';

export default class PointService {
  private _modelPoint: ModelPoint;
  private _modelPoints: ModelPoints;

  constructor() {
    this._modelPoint = new ModelPoint();
    this._modelPoints = new ModelPoints();
  }

  public async insertPoint(featurePoint: IPoint) {
    const inserted = await this._modelPoint.insertPoint(featurePoint);
    return inserted;
  }

  public async insertCollectionPont(featureColletionPoint : IPoints) {
    const inserted = await this._modelPoints.insertCollectionPoint(featureColletionPoint);
    return inserted;
  }

  public async getPoints() {
    return await this._modelPoint.getPoints();
  }

  public async updatePoint(id: string, point: Partial<IPoint>) {
    await this._modelPoint.updatePoint(id, point);
    const updated = this.getById(id);
    return updated;
  }

  public async getById(id:string) {
    return await this._modelPoint.getById(id);
  }

  public async deleteById(id:string) {
    await this._modelPoint.deletePoint(id)
  }
}