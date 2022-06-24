import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  user: string;
  passwordHash: string;
  id: number;
  }

  User.init({
    user: DataTypes.STRING,
    passwordHash: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'user',
    timestamps: false,
  });

  export default User;