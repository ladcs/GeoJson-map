import { Schema } from 'mongoose';

import { IPolygon } from './IGeoJsonPolygon';

const polygonSchema = new Schema<IPolygon>({
  type: { type: String },
  properties: { name: { type: String }, color: { type: String } },
  geometry: { type: { type: String }, coordinates: [[[Number]]] }
});

export default polygonSchema;