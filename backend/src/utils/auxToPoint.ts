import { IGeometryAndName, IPoint } from '../schema/IGeoJsonPoint';

export class AuxToPoint {

  public coordinates(coordinatesToPoint: IGeometryAndName) {
    const { name, coordinates } = coordinatesToPoint;
    const geometry = {
      type: 'point',
      coordinates,
    }
    const properties = {
      name,
    }
    return { type: 'feature', geometry, properties };
  }

  public collectionPoints(points: IPoint[]) {
    const features = points.map(p => {
      const { type, properties, geometry } = p;
      return { type, properties, geometry };
    });
    const collectionPoints = {
      type: "featureCollection",
      features,
    };
    return collectionPoints;
  }
}