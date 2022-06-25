import { Router } from 'express';
import login from './login';

const app = Router();

app.use(login);

export default app;
