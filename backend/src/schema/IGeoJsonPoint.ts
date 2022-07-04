export interface IProperties {
  name: string,
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