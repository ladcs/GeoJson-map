import { Router } from 'express';
import login from './login';
import points from './point';

const app = Router();

app.use(points);
app.use(login);

export default app;
