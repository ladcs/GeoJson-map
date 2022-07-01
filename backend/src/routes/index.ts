import { Router } from 'express';
import login from './login';
import points from './point';
import polygon from './polygon';

const app = Router();

app.use(points);
app.use(login);
app.use(polygon);

export default app;
