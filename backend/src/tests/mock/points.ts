const inPoint = {
  type: "Feature",
  properties: {
      name: "Coors Field",
  },
  geometry: {
      type: "Point",
      coordinates: [-104.99404, 39.75621]
  }
};

const inPointReturn = {
  ...inPoint,
  _id: {
    $oid: 'anyId',
  }
}

const inPointCollection = {
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

export { inPoint, inPointCollection, inPointReturn, inPointCollectionReturn }