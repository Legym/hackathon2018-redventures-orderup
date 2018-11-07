const express = require('express');
const router = express.Router();
const loc = require('../controllers/location');
const vendor = require('../controllers/vendor');
const entree = require('../controllers/entree');
const menu = require('../controllers/menu');
const order = require('../controllers/order');

router.route('/location').get(loc.getLocations);
router.route('/vendor/:locationId').get(vendor.getVendorsByLocation);
router.route('/entree/:vendorId').get(entree.getEntreesByVendor);

router.route('/menu/:locationId/:vendorId').get(menu.getMenuByVendor);
router.route('/menu/:locationId').get(menu.getMenuByLocation)

router.route('/order').post(order.submit);
router.route('/menu/:locationId').get(menu.getMenuByLocation)

router.route('/order/:orderId').post(order.completeOrder);
router.route('/createEntree').post(menu.createEntree);
router.route('/createSide').post(menu.createSide);
router.route('/createDrink').post(menu.createDrink);

router.get('/healthcheck', (req, res) => {
  return res.status(200).end();
});

module.exports = router;