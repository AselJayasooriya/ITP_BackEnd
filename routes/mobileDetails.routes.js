module.exports = (app) => {
  const mobile = require("../controllers/mobile.controller");
  let router = require("express").Router();

  // Create a new creditcard
  router.post("/", mobile.create);

  router.get("/info", mobile.findAll);

  // Retrieve all info with givenpayment ID
  router.get("/:id", mobile.findAllByDPaymentID);

  // Update a Session with id
  router.put("/:id", mobile.update);
  //
  // Delete a Creditcard with id
  router.delete("/:id", mobile.delete);
  // //
  // // // Delete all Sessions
  // // router.delete("/", credit.deleteAlll);

  app.use("/api/mobile", router);
};
// http://localhost:8080/api/payments/create
