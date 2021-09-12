const db = require("../models");
const Prescription = db.prescriptions;

// Create and Save a new Prescription
exports.create = (req, res) => {
    // Create a Prescription
    const prescription = new Prescription({
        dId: req.body.dId,
        dPName: req.body.dPName,
        dPDignosis: req.body.dPDignosis,
        dMed1: req.body.dMed1,
        dDose1: req.body.dDose1,
        dMed2: req.body.dMed2,
        dDose2: req.body.dDose2
    });

    // Save Prescription in the database
    prescription
        .save(prescription)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Prescription."
            });
        });
};

// Retrieve all Prescriptions of a given id from the database.
exports.findAll = (req, res) => {

};

// Find a single Prescription with an id
exports.findOne = (req, res) => {

};

// Update a Prescription by the id in the request
exports.update = (req, res) => {

};

// Delete a Prescription with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Prescriptions from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Prescription
exports.findAllPublished = (req, res) => {

};
