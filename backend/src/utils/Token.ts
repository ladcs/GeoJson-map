import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';

class Token {
  private _SECRET: string = readFileSync('jwt.evaluation.key', 'utf-8') || 'super_senha';
  private _JWT_CONFIG = { expiresIn: '2h' };

  create(info: object) {
    const { expiresIn } = this._JWT_CONFIG;
    const token = jwt.sign(info, this._SECRET, { expiresIn, algorithm: 'HS256' });

    return token;
  }

  decode(token: string) {
    return jwt.verify(token, this._SECRET);
  }
}

export default Token;
