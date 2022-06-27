import { Schema } from 'mongoose';
import { IPoint, IGeometry, IProperties, IPoints } from './IGeoJson';

const geometrySchema = new Schema<IGeometry> ({
  type: String,
  coordinates: [Number],
});

const propertiesSchema = new Schema<IProperties> ({
  name: String,
});

const pointSchema = new Schema<IPoint> ({
  type: { type: String },
  geometry: geometrySchema,
  properties: propertiesSchema,
});

const colletionPointsSchema = new Schema<IPoints> ({
  type: { type: String },
  features: [pointSchema]
});

export {
  pointSchema,
  colletionPointsSchema
}