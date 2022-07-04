import { Schema } from 'mongoose';

import { IPoint } from './IGeoJsonPoint';

const pointSchema = new Schema<IPoint>({
  type: { type: String },
  properties: { name: { type: String } },
  geometry: { type: { type: String }, coordinates: [Number] }
});

export default pointSchema;