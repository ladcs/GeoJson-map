import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = (mongoDatabaseURI = "mongodb://localhost:27017/trace") => mongoose.connect(mongoDatabaseURI);

export default connection;