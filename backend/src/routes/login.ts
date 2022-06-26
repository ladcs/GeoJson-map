import { Router } from 'express';
import Login from '../controller/user';

const ROUTE = '/login';

const controller = new Login();

const app = Router();

app.post(ROUTE, controller.login);
app.post(`${ROUTE}/register`, controller.createNewUser);

export default app;
