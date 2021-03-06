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

  updated = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const update = await this._service.updated(id, req.body);
      res.status(StatusCodes.OK).json(update);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const _id = req.params.id;
      const deleted = await this._service.delete(_id);
      res.status(StatusCodes.NO_CONTENT).json(deleted);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}