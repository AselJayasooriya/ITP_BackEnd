module.exports = (app) => {
  const refund = require("../controllers/refunds.controller");
  let router = require("express").Router();

  // Create a new creditcard
  router.post("/", refund.create);

  router.get("/info", refund.findAll);

  // Retrieve all info with givenpayment ID
  router.get("/:id", refund.findAllByDPaymentID);

  // Update a Session with id
  router.put("/:id", refund.update);
  //
  // Delete a Creditcard with id
  router.delete("/:id", refund.delete);
  // //
  // // // Delete all Sessions
  // // router.delete("/", credit.deleteAlll);

  app.use("/api/refund", router);
};
// http://localhost:8080/api/payments/create
