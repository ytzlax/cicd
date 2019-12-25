const entity = {
  location: {
    geometry: {type: 'Polygon', coordinates: [35.22, 34.33]}
  }
};


//Before
if (entity && entity.location && entity.location.geometry && entity.location.geometry.coordinates) {
  console.log(entity.location.geometry.coordinates)
}

//After
if (entity?.location?.geometry?.coordinates) {
  console.log(entity.location.geometry.coordinates)
}


