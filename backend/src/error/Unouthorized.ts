import { StatusCodes } from 'http-status-codes';
import ErrorBase from './ErrorBase';

class Unauthorized extends ErrorBase {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export default Unauthorized;
