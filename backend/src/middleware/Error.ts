import { Request, Response } from 'express';
import ErrorBase from '../error/ErrorBase';

export default function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
) {
  if (err instanceof ErrorBase) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: err.message });
}
