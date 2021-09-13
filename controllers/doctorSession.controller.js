const db = require("../models");
const Session = db.sessions;

// Create and Save a new Session

exports.create = (req, res) => {
    const session = new Session({
        doctor_id: req.body.doctorID,
        date: req.body.sessionDate,
        time: req.body.sessionTime,
        maxAppointments: req.body.maxAppointments,
        currentAppointments: 0
    });
    session
        .save(session)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while creating your session please try again."
            });
        });



};

// Retrieve all Sessions with matching doctor ID from the database.
exports.findAllByDoctorID = (req, res) => {
    const doctorID = req.params.id;
        Session.find({ doctor_id: doctorID })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sessions."
            });
        });
};

// Update a Session by the id in the request
// exports.update = (req, res) => {
//
// };

// Delete a Session with the specified id in the request
exports.delete = (req, res) => {
    const ID = req.params.id;
    console.log(ID);
    Session.deleteOne({ _id: ID })
        .then(response => {
            res.send(response);
            console.log(response);
            console.log("deleted")
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error occured couldn't delete item."
            });
        });
};

// // Delete all Sessions from the database.
// exports.deleteAll = (req, res) => {
//
// };

// exports.findByDoctorName = (req,res) => {
//
// };