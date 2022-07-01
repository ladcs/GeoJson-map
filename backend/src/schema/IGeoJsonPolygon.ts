export interface IProperties {
  name: string,
  color: string
}

export interface IGeometry {
  type: string,
  coordinates: Array<Array<number>> | Array<Array<Array<number>>>
}

export interface IMultGeometry {
  type: string,
  coordinates: Array<Array<Array<number>>>
}

export interface IPolygon {
  _id?: string,
  type: string,
  geometry: IGeometry,
  properties: IProperties
}

export interface ICollectionPolygon {
  type: string,
  features: IPolygon[]
}

export interface IPontsToPolygon {
  color: string,
  coordinates: Array<Array<number>> | Array<Array<Array<number>>>,
  name: string,
  type: string,
}