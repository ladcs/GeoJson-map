import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Service from '../services/user/userService';

export default class Login {
  service: Service;
  constructor() {
    this.service = new Service();
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const login = await this.service.login(email, password);
      req.headers.Authorization = login.token;
      res.status(StatusCodes.OK).json(login);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
}
