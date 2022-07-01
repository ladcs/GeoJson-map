import { StatusCodes } from 'http-status-codes';
import ErrorBase from './ErrorBase';

class BadRequest extends ErrorBase {
  constructor(message: string) {
    super(message, StatusCodes.NO_CONTENT);
  }
}

export default BadRequest;
