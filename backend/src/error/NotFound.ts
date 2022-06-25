import { StatusCodes } from 'http-status-codes';
import ErrorBase from './ErrorBase';

class NotFound extends ErrorBase {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export default NotFound;
