import BadRequest from '../../error/BadRequest';

export default class LoginError {
  static dadaOkay(password: string, email: string): void {
    if (!(!password || !email)) return;
    throw new BadRequest('All fields must be filled');
  }
}
