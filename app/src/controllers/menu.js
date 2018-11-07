const db = require("../models");

const getMenuByVendor = async (req, res, next) => {
  // TODO: Do these in parallel
  let entrees;
  let sides;
  let drinks;

  try {
    entrees = await db.Entree.findAll({ where: { VendorID: req.params.vendorId }, raw: true });
    sides = await db.Side.findAll({ where: { LocationID: req.params.locationId }, raw: true });
    drinks = await db.Drink.findAll({ where: { LocationID: req.params.locationId }, raw: true });
  } catch (e) {
    return res.status(500).send({ error: 'Failed to get menu data.' });
  }


  let filteredSides = [];
  if (sides.length) {
    filteredSides = sides.filter((side) => {
      // If a side doesn't have a vender we assume it is available for the entire location i.e. bag of chips
      if (side.VendorID == null || side.VendorID == req.params.vendorId) {
        return side;
      }
    });
  }

  let Menu = {};
  Menu.Entrees = entrees;
  Menu.Sides = filteredSides;
  Menu.Drinks = drinks;

  return res.status(200).send({
    success: 'true',
    Menu: Menu
  });
}

const getMenuByLocation = async (req, res, next) => {
  // TODO: Do these in parallel
  let entrees;
  let sides;
  let drinks;

  try {
    entrees = await db.Entree.findAll({ raw: true });
    sides = await db.Side.findAll({ where: { LocationID: req.params.locationId }, raw: true });
    drinks = await db.Drink.findAll({ where: { LocationID: req.params.locationId }, raw: true });
  } catch (e) {
    return res.status(500).send({ error: 'Failed to get menu data.' });
  }

  const vendors = await db.Vendor.findAll({ where: { LocationID: req.params.locationId }, raw: true });
  let filteredEntrees = [];
  if (vendors) {
    // we only want entrees that have vendors for this location
    filteredEntrees = entrees.filter(entree => true === vendors.some(vendor => entree.VendorID === vendor.ID));
  }

  let Menu = {};
  Menu.Entrees = filteredEntrees;
  Menu.Sides = sides;
  Menu.Drinks = drinks;

  return res.status(200).send({
    success: 'true',
    Menu: Menu
  });
}

const createEntree = async (req, res, next) => {
  let entree;
  const {
    vendorId,
    name,
    price,
    description,
    calories,
    numSides,
    imgUrl
  } = req.body

  try {
    entree = await db.Entree.create({
      VendorID: vendorId,
      Name: name,
      Price: price,
      Description: description,
      Calories: calories,
      NumSides: numSides,
      ImgUrl: imgUrl
    })
  } catch (e) {
    return res.status(500).send({ error: 'Failed to add Entree.' });
  }

  return res.status(200).send({
    succes: true,
    Entree: entree
  })
}

const createSide = async (req, res, next) => {
  let side;
  const {
    vendorId,
    name,
    price,
    description,
    calories,
    numSides,
    imgUrl,
    locationId
  } = req.body

  try {
    side = await db.Side.create({
      Name: name,
      Description: description,
      LocationID: locationId,
      VendorID: vendorId,
      Price: price,
      Calories: calories,
      NumSides: numSides,
      ImgUrl: imgUrl
    })
  } catch (e) {
    return res.status(500).send({ error: 'Failed to add Side.' });
  }

  return res.status(200).send({
    succes: true,
    Side: side
  })
}

const createDrink = async (req, res, next) => {
  let drink;
  const {
    name,
    price,
    imgUrl,
    locationId
  } = req.body

  try {
    drink = await db.Drink.create({
      Name: name,
      LocationID: locationId,
      Price: price,
      ImgUrl: imgUrl
    })
  } catch (e) {
    return res.status(500).send({ error: 'Failed to add Drink.' });
  }

  return res.status(200).send({
    succes: true,
    Drink: drink
  })
}


module.exports = {
  getMenuByVendor,
  getMenuByLocation,
  createEntree,
  createSide,
  createDrink
}