module.exports = app => {
    const prescriptions = require("../controllers/doctorPrescription.controller");

    let router = require("express").Router();

    // Create a new Prescription
    router.post("/", prescriptions.create);

    app.use('/api/prescriptions', router);
};