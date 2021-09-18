const db = require("../models");
const Channell = db.channell;
const Session = db.sessions;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create and Save a new channelling

exports.create = (req, res) => {
    const channell = new Channell({
        dSession:  mongoose.Types.ObjectId(req.body.session),
        fullname: req.body.fullname,
        nic: req.body.nic,
        email: req.body.email,
        mobile: req.body.mobile,
        age: req.body.age,
        status: "Pending",
        
    });
    channell
        .save(channell)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err)
            res.status(500).send({
                message: err.message || "Some error occured while creating your channelling please try again."
            });
        });



};

// Retrieve all appoitnemnts with id
exports.findAllByChannellID = (req, res) => {
    const channellID = req.params.id;
Channell.find({ chanell_id: channellID })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving chanelling."
            });
        });
};

exports.findAllByStatus = (req, res) => {
    const wantedStatus = req.params.status
    Channell.find({ status: wantedStatus }).populate('dSession')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving chanelling."
            });
        });
};


// Update a channelling by the id in the request
exports.updateStatus = (req, res) => {
    const ID = req.params.id.toString();
    const newStatus = req.params.status.toString();
    Channell.updateOne(
        { _id: ID },
        {status: newStatus},
    )
        .then(response => {
            if (response.nModified > 0)
                res.status(200).send("Successfully Updated")
            else
                res.status(400).send("0 rows updated");
        })
        .catch(err => {
            res.send("Error update");
        });
};

// Delete a channelling with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all channells from the database.
exports.deleteAll = (req, res) => {

};
