import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASS|| '123456',
  database: process.env.MYSQL_NAME || 'trace',
  host: process.env.MYSQL_HOST || 'mysql',
  port: Number(process.env.MYSQL_PORT) || 3002,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
  define:{
    timestamps: false,
  }
}

module.exports = config;
