module.exports = app => {
    const prescriptions = require("../controllers/doctorPrescription.controller");

    let router = require("express").Router();

    // Create a new Prescription
    router.post("/", prescriptions.create);

    //read all prescriptions of a given doctor ID
    router.get("/:id", prescriptions.findAll);

    app.use('/api/prescriptions', router);
};