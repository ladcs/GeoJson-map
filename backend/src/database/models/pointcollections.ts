import { Model, DataTypes } from 'sequelize';
import db from '.';

class PointCollection extends Model {
  name: string;
  longitude: number;
  latitude: number;
  id: number;
  }

  PointCollection.init({
    id:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    longitude: DataTypes.INTEGER,
    latitude: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'PointCollection',
    timestamps: false,
  });

export default PointCollection;