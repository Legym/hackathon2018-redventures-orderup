const db = require("../models");
const stripe = require('stripe')('sk_test_kULTMjBeNhdC3bmTsTitPmzI');
const fetch = require('node-fetch');
var newrelic = require('newrelic');

const processCharge = ({ amount, token }) => {
  return stripe.charges.create({
    amount: amount,
    currency: 'usd',
    source: token,
    description: 'OrderUp Order',
    metadata: {}
  });
}

const printLabels = (labels) => {
  let promiseArr = [];

  for (var label of labels) {
    let prom = fetch('http://172.31.8.150:3000/printLabel',
      {
        method: 'POST',
        body: JSON.stringify(label),
        headers: { 'Content-Type': 'application/json' }
      })
      .then() // expecting a json response
    processArr.push(prom);
  }

  return promiseArr;
}

const submit = async (req, res, next) => {
  // TODO: Validation
  // generate a semi unique orderid
  const OrderID = new Date().valueOf();
  // keep a tab of what our total is
  let orderTotal = 0;
  // labels
  let labels = [];

  let location = {};
  try {
    // lookup location
    location = await db.Location.findByPk(req.body.locationId);
  } catch (e) {
    return res.status(500).send({ error: e });
  }

  if (typeof location === 'undefined' || location == null) {
    return res.status(500).send({ error: "This is not a valid location" });
  }

  // create order
  let order = await db.Order.create({OrderID, FirstName: req.user.firstName, LastName: req.user.lastName, Email: req.user.email, LocationID: req.body.locationId});

  // if Entrees add them to order
  if (req.body.entrees && req.body.entrees.length > 0) {

    newrelic.recordMetric('Entree Count', req.body.entrees.length);
    for (var entree of req.body.entrees) {

      // lets lookup our entree
      let rec = await db.Entree.findByPk(entree.entreeId);

      if (rec) {

        let orderEntree = await db.OrderEntree.create({ OrderID, EntreeID: rec.ID });
        newrelic.addCustomAttribute('VendorId', rec.VendorID);
        // we need to format a label, this seems like a good place
        let labelObj = {};
        labelObj.OrderID = OrderID;
        labelObj.Name = `${order.FirstName} ${order.LastName}`;
        labelObj.Location = location.Name;
        labelObj.Entree = rec.Name;
        labelObj.Notes = entree.note;
        labelObj.Sides = [];

        orderTotal += rec.Price;

        // lets save our sides for this entree
        if (req.body.entreeSides && req.body.entreeSides.length > 0) {

          // we only want the sides for this specific entree
          let entreeSides = req.body.entreeSides.filter((side) => side.entreeId == rec.ID);

          for (var side of entreeSides) {

            let rec = await db.Side.findByPk(side.sideId);

            if (rec) {

              labelObj.Sides.push(rec.Name);
              let entreeSide = await db.OrderEntreeSide.create({ OrderEntreeID: orderEntree.ID, SideID: rec.ID });

            } else {
              return res.status(500).send({ error: "Side does not exist" });
            }
          }
        }

        labels.push(labelObj);
      } else {
        return res.status(500).send({ error: "Entree does not exist" });
      }
    } //end loop
  }


  if (req.body.sides && req.body.sides.length > 0) {
    for (var side of req.body.sides) {
      let rec = await db.Side.findByPk(side.sideId);
      if (rec) {
        let side = await db.OrderSide.create({ OrderID, SideID: rec.ID });

      } else {
        return res.status(500).send({ error: "Side does not exist" });
      }
    }
  }
  var sidesCnt = 0;
  if (req.body.sides) {
    sidesCnt = req.body.sides.length
  }

  if (req.body.entreeSides) {
    sidesCnt += req.body.entreeSides.length
  }

  newrelic.recordMetric('Side Count', sidesCnt);

  let drinkLabel = [];
  if (req.body.drinks && req.body.drinks.length > 0) {
    let i = 0;
    for (var drink of req.body.drinks) {
      if (i >= 3) break; //only allow 3 drinks for now

      let rec = await db.Drink.findByPk(drink.drinkId);
      if (rec) {
        let drink = await db.OrderDrink.create({ OrderID, DrinkID: rec.ID });
        orderTotal += rec.Price;
        drinkLabel.push(rec.Name);
      } else {
        return res.status(500).send({ error: "Drink does not exist" });
      }

      i++;
    }
  }

  if (labels && labels.length > 0) {
    // we only want to push the drink/s to the first label
    labels[0].Drinks = drinkLabel;
  }


  newrelic.recordMetric('Order total', orderTotal);
  order.TotalCost = orderTotal;
  try {
    order = await order.save();
  } catch (e) {
    return res.status(500).send({ error: e });
  }

  // LAAAAABEEEEEEELLLLLS!
  try {
    await Promise.all(printLabels(labels));
  } catch (e) {
    //return res.status(500).send({ error: "Entree does not exist" });
  }

  // everything checks out so lets make a stripe charge
  try {
    await processCharge({amount: order.TotalCost, token: req.body.cardToken});
  } catch (e) {
    // return res.status(500).send({ error: e });
    // log actual error to new relic
  }



  // TODO: Do these in parallel

  return res.status(200).send({
    success: 'true',
    Order: order
  });
}

const completeOrder = async (req, res, next) => {
  if (req.params && req.params.orderId > 0) {
    let order = await db.Order.findOne({ where: { OrderID: orderId } });

    if (order.length > 0) {
      order.Completed = 'Y';
      order.save();
    } else {
      return res.status(500).send({ error: "Order does not exist" });
    }

    return res.status(200).send({ message: 'OK' });
  }
}

module.exports = {
  submit,
  completeOrder
}

