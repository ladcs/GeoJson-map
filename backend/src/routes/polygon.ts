import { Router } from 'express';
import Polygon from '../controller/polygonController';

const ROUTE = '/polygon';

const controller = new Polygon();

const app = Router();

app.get(ROUTE, controller.getAll);
app.post(ROUTE, controller.insertPolygon);
app.delete('/polygon/:id', controller.delete);

export default app;
