import * as bcryptjs from 'bcryptjs';

export default class PassCrypt {
  constructor(public crypt = bcryptjs) { }

  public async checkPassword(password: string, passwordDb: string): Promise<boolean> {
    return this.crypt.compare(password, passwordDb);
  }

  public async crypto(password: string): Promise<string> {
    return this.crypt.hash(password, this.crypt.genSaltSync());
  }
}
