import express from 'express';
import { Mongoose } from 'mongoose';

import routes from './routes';
import ErrorMiddleware from './middleware/Error';
import connection from './connectMongoose';
import cors from 'cors';

class App {
  public app: express.Express;
  public connect: Promise<Mongoose>;

  constructor() {
    this.app = express();
    this.config();
    this.connect = connection();
  }

  private config():void {
    this.app.use(express.json());

    this.app.use(cors())

    this.app.use(routes);

    this.app.use(ErrorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }
}

export { App };

export const { app } = new App();