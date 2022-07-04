const inPoint = {
  name: "Coors Field",
  coordinates: [-104.99404, 39.75621],
  _id: {
    $oid: 'any_id',
  },
};

const _id = { $oid: 'anyId' };


const obj = { properties: {
  name: 'sweet home'
} }

const espPoint = {
  type: "Feature",
  properties: {
    name: "Coors Field",
  },
  geometry: {
      type: "Point",
      coordinates: [-104.99404, 39.75621]
    }
}

const inPointCollection = {
  _id: {
    $oid: 'any_id',
  },
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Coors Field",
      },
      geometry: {
        type: "Point",
        coordinates: [-104.99404, 39.75621]
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [125.6, 10.1]
      },
      properties: {
        name: "Dinagat Islands"
      }
    }
  ]
};

const inPointCollectionReturn = {
  ...inPointCollection,
  _id: {
    $oid: 'any_id',
  }
}

export { inPoint, inPointCollection, espPoint, inPointCollectionReturn, _id, obj }