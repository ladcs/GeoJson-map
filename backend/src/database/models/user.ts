import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  userName: string;
  email: string;
  passwordHash: string;
  id: number;
  }

  User.init({
    passwordHash: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'user',
    timestamps: false,
  });

export default User;