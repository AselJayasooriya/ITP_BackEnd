module.exports = (app) => {
  const empform = require("../controllers/employeeDetails.controller");

  let router = require("express").Router();

  // Create a new empform
  router.post("/", empform.create);

  // Retrieve all empform data with given Emp ID
  router.get("/:id", empform.findAllByEmpID);

  //find all data
  router.get("/", empform.getAll);

  // Update a empform with id
  router.put("/:id", empform.update);

  // Delete a empform with id
  router.delete("/:id", empform.delete);

  app.use("/api/empform", router); //this is the base url
};
