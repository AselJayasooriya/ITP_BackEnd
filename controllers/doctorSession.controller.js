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
exports.findAll = (req, res) => {
    const doctorID = req.query.doctorID;
    console.log(doctorID);
    let condition = doctorID ? { doctor_id: doctorID } : {};
        Session.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};

// Find a single Session with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Session.findOne(id)
        .then(data =>{
            if(!data) {
                res.send({message: "Session with id " + id + " was not found"})
            }
            else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error occurred while retrieving the session with id" + id});
        })
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