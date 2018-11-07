const db = require("../models");

const getLocations = async (req, res, next) => {
  let locations = await db.Location.all({raw:true});

  let all;
  if(locations.length > 0) {
   all = await Promise.all(locations.map(async (location) => {
      location.Vendors = await db.Vendor.findAll({ where: { LocationID: location.ID}, raw: true });
      console.log(location);
      return location;
    }));
  }
  return res.status(200).send({
    success: 'true',
    Locations: all 
  }).catch(err => console.log('err - ', err));
}

module.exports = {
  getLocations
}