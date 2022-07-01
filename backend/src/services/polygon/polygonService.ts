import { AuxToPolygon } from '../../utils/auxToPolygon';
import Model from '../../model/polygon';
import { IPontsToPolygon } from '../../schema/IGeoJsonPolygon';
import NoContent from '../../error/NoContent';

export default class PolygonService {
  
  constructor(private _model = new Model(),
  private _auxToPolygon = new AuxToPolygon()) { }

  public async getPolygon() {
    const polygons = await this._model.getPolygon()
    if(polygons.length > 1) {
      const collectionPolygon = this._auxToPolygon.collectionPolygon(polygons);
      return collectionPolygon;
    } if(polygons.length === 0) throw new NoContent('no polygon');
    const { type, geometry, properties } = polygons[0];
    return { type, geometry, properties };
  }

  public async created(pointsToPolygon: IPontsToPolygon) {
    const polygon = this._auxToPolygon.polygonGeoJson(pointsToPolygon);
    const created = this._model.created(polygon);
    return created;
  }
}

