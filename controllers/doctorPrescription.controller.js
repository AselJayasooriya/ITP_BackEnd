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
    const doctorID = req.params.id;

    Prescription.find({ dId: doctorID })
        .then(data => {
            res.send(data);

        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the prescriptions."
            });
        });
};

// Find a single Prescription with an id
exports.findOne = (req, res) => {

};

// Update a Prescription by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id; //change it to dPName if errors occur

    Prescription.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Prescription of ${id}. Maybe prescription was not found!`
                });
            } else res.send({ message: "Prescription was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Prescription with id=" + id
            });
        });
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
