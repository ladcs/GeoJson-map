import { StatusCodes } from 'http-status-codes';
import ErrorBase from './ErrorBase';

class BadRequest extends ErrorBase {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export default BadRequest;
