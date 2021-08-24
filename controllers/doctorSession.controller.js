const db = require("../models");
const Session = db.sessions;

// Create and Save a new Session

exports.create = (req, res) => {
    console.log(req.body);

    const session = new Session({
        doctor_id: req.body.doctorID,
        date: req.body.sessionDate,
        time: req.body.sessionTime,
        maxAppointments: req.body.maxAppointments,
    });
    session
        .save(session)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating your session please try again."
            });
        });



};

// Retrieve all Sessions with matching doctor ID from the database.
exports.findAllByDoctorID = (req, res) => {
    const doctorID = req.params.id;
console.log(req.params);
        Session.find({ doctor_id: doctorID })
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sessions."
            });
        });
};

// Update a Session by the id in the request
exports.update = (req, res) => {

};

// Delete a Session with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Sessions from the database.
exports.deleteAll = (req, res) => {

};

exports.findByDoctorName = (req,res) => {

};