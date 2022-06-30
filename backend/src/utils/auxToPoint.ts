import { IPoints } from '../schema/Point';

export class AuxToPoint {

  public coordinates(coordinates: number[]) {
    const longitude = coordinates[0];
    const latitude = coordinates[1];
    return { longitude, latitude };
  }

  public collectionPoints(points: IPoints[]) {
    const features = points.map(p => ({
      type: "feature",
      properties: { name: p.name },
      geometry: {
        type: 'point',
        coordinates:[p.longitude, p.latitude],
      },
    }));
    const collectionPoints = {
      type: "featureCollection",
      features,
    };
    return collectionPoints;
  }

  public point(pointToTrat: IPoints[]) {
    const { name, longitude, latitude } = pointToTrat[0];
    const point = {
      type: "feature",
      properties: { name },
      geometry: {
        type: 'point',
        coordinates:[longitude, latitude],
      }
    }
    return point;
  }
}