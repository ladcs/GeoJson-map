import mongoose from 'mongoose';

const connection = (mongoDatabase = 'mongodb://localhost:3001/trace') => mongoose
  .connect(mongoDatabase);

export default connection;
