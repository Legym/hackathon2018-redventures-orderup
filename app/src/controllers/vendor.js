const db = require("../models");

const getVendorsByLocation = async (req, res, next) => {
  let vendors = await db.Vendor.find({ where: { LocationID: req.params.locationId} });
  return res.status(200).send({
    success: 'true',
    data: vendors 
  });
}

module.exports = {
  getVendorsByLocation
}