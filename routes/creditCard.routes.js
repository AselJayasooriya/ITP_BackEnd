module.exports = (app) => {
  const credit = require("../controllers/creditCardDetails.controller");
  let router = require("express").Router();

  // Create a new creditcard
  router.post("/", credit.create);

  router.get("/info", credit.findAll);

  // Retrieve all info with givenpayment ID
  router.get("/:id", credit.findAllByDPaymentID);

  // Update a Session with id
  router.put("/:id", credit.update);
  //
  // Delete a Creditcard with id
  router.delete("/:id", credit.delete);
  // //
  // // // Delete all Sessions
  // // router.delete("/", credit.deleteAlll);

  app.use("/api/payments", router);
};
// http://localhost:8080/api/payments/create
