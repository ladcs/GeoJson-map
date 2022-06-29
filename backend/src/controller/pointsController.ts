import { NextFunction, Request, Response } from 'express';
import { StatusCodes  } from 'http-status-codes';
import Services from '../services/point/pointService';

export default class PointController {
  private _service: Services;
  constructor() {
    this._service = new Services();
  }

  insertPoint = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inserted = await this._service.insertPoint(req.body);
      res.status(StatusCodes.CREATED).json(inserted);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  getPoints = async (_req: Request, res:Response, next: NextFunction) => {
    try {
      const points = await this._service.getPoints();
      res.status(StatusCodes.OK).json(points);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}