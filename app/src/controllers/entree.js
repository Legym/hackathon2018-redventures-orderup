const db = require("../models");

const getEntreesByVendor = async (req, res, next) => {
  let entrees = await db.Entree.findAll({ where: { VendorID: req.params.vendorId}});
  return res.status(200).send({
    success: 'true',
    data: entrees 
  });
}

module.exports = {
  getEntreesByVendor
}