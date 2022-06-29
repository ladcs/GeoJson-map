import { Router } from 'express';
import Point from '../controller/pointsController';

const ROUTE = '/point';

const controller = new Point();

const app = Router();

app.get(ROUTE, controller.getPoints);
app.post(ROUTE, controller.insertPoint);

export default app;
