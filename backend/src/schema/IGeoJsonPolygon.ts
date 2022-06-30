import { Schema } from 'mongoose';

interface Properties {
  name: string,
  color: string
}

interface Geometry {
  type: string,
  coordinates: Array<Array<number>>
}

interface Polygon {
  type: string,
  geometry: Geometry,
  properties: Properties
}

const geometrySchema = new Schema<Geometry>({
  type: { type: String, required: true },
  coordinates: { type: [[Number]], default: []}
});

const propertiesSchema = new Schema<Properties> ({
  name: { type: String, required: true },
  color: { type: String, required: true }
})

const polygonSchema = new Schema<Polygon>({
  type: { type: String, required: true },
  geometry: {type: geometrySchema, default: {} },
  properties: { type: propertiesSchema, default: { } },
});

export default polygonSchema;