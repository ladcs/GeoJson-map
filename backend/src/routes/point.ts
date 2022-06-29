import { Router } from 'express';
import Point from '../controller/pointsController';

const ROUTE = '/point';

const controller = new Point();

const app = Router();

app.get(ROUTE, controller.getPoints);
app.get(`${ROUTE}/:id`, controller.getById);
app.post(ROUTE, controller.insertPoint);
app.post('/points', controller.insertPoints);
app.patch(`${ROUTE}/:id`, controller.updatePoint);
app.delete(`${ROUTE}/delete/:id`, controller.deleteById);

export default app;