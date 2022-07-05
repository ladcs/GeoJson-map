export interface IProperties {
  name: string,
}

export interface IGeometryAndName {
  name: string,
  coordinates: number[],
}

export interface IGeometry {
  type: string,
  coordinates: Array<number>
}

export interface IPoint {
  _id?: string,
  type: string,
  geometry: IGeometry,
  properties: IProperties
}

export interface ICollectionPoints {
  type: string,
  features: IPoint[]
}