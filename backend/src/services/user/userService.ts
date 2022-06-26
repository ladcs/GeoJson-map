import Unauthorized from '../../error/Unouthorized';
import PassCrypt from '../../utils/PassCrypt';
import User from '../../database/models/user';
import ILogin from './ILogin';
import Token from '../../utils/Token';
import LoginError from './LoginErrors';
import INewUser from './INewUser';
import registerSchema from './RegisterError';

export default class LoginService {
  private _passCrypt: PassCrypt;
  private _token: Token;
  constructor() {
    this._passCrypt = new PassCrypt();
    this._token = new Token();
  }

  public async login(email: string, password: string):Promise<ILogin> {
    LoginError.dadaOkay(email, password);

    const userFound = await User.findOne({ where: { email } });

    if (!userFound) throw new Unauthorized('Incorrect email or password');

    const { passwordHash, userName, id } = userFound;
    const isPasswordValid = await this._passCrypt.checkPassword(password, passwordHash);

    if (!isPasswordValid) throw new Unauthorized('Incorrect email or password');

    const token = this._token.create({ id, userName, email });

    return { userName, email, id , token };
  }

  public async register(body:INewUser):Promise<ILogin> {
    registerSchema(body);

    const { email, password, userName } = body
    const passwordHash = await this._passCrypt.crypto(password);

    const userCreated = await User.create({ email, passwordHash, userName });

    const token = this._token.create({ id: userCreated.id, userName, email });
    return { userName, id: userCreated.id, email, token};
  }
}
