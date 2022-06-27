export interface IPoint {
  type: string,
  geometry: {
    type: string,
    coordinates: number[],
  },
  properties: {
    name: string,
  },
}

export interface IGeometry {
  type: string,
  coordinates: number[],
}

export interface IProperties {
  name: string
}

export interface IPoints {
  type: string,
  features: IPoint[],
}