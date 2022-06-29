import {Request, Response, NextFunction } from 'express';
import { StatusCodes  } from 'http-status-codes';
import Services from '../services/point/pointService';

export default class PointController {
  private _service: Services;
  constructor() {
    this._service = new Services();
  }

  public insertPoint = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const point = await this._service.insertPoint(req.body);
      res.status(StatusCodes.CREATED).json(point);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  public getPoints = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const points = await this._service.getPoints();
      res.status(StatusCodes.OK).json(points);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}