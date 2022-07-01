import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import Services from '../services/polygon/polygonService';


export default class PolygonController {
  private _service: Services;
  constructor() {
    this._service = new Services();
  }

  insertPolygon = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inserted = await this._service.created(req.body);
      res.status(StatusCodes.CREATED).json(inserted);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const getAll = await this._service.getPolygon();
      res.status(StatusCodes.OK).json(getAll);
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}