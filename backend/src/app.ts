import express from 'express';

import routes from './routes';
import ErrorMiddleware from './middleware/Error';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
  }

  private config():void {
    this.app.use(express.json());

    this.app.use(routes);

    this.app.use(ErrorMiddleware);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
  }
}

export { App };

export const { app } = new App();