import { Model, DataTypes } from 'sequelize';
import db from '.';

class PointCollection extends Model {
  name: string;
  longitude: number;
  latitude: number;
  id: number;
  }

  PointCollection.init({
    id: DataTypes.NUMBER,
    longitude: DataTypes.NUMBER,
    latitude: DataTypes.NUMBER,
    name: DataTypes.STRING
  }, {
    sequelize: db,
    modelName: 'PointCollection',
    timestamps: false,
  });

export default PointCollection;