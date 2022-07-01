import { App } from './app';
import connection from './model/mongoConnect';
import 'dotenv/config';

const PORT = process.env.PORT || 3003;

const URI = process.env.MONGODB_URI;

new App().start(PORT);

connection(URI);
