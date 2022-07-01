import { IPolygon, IPontsToPolygon } from '../schema/IGeoJsonPolygon';

export class AuxToPolygon {
  public collectionPolygon(points: IPolygon[]) {
    const features = points.map(p => {
      const { type, geometry, properties } = p;
      return { type, geometry, properties };
    });
    const collectionPoints = {
      type: "featureCollection",
      features,
    };
    return collectionPoints;
  }

  public polygonGeoJson(polygon: IPontsToPolygon) {
    const { type, coordinates, name, color } = polygon;
    const featPolygon = {
      type: 'feature',
      properties: { name, color },
      geometry: { type, coordinates },
    };
    return featPolygon;
  }
}