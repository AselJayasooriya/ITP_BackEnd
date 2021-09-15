const db = require("../models");
const Channell = db.channell;


// Create and Save a new channelling

exports.create = (req, res) => {
    console.log(req.body);

    const channell = new Channell({
        fullname: req.body.fullname,
        nic: req.body.nic,
        email: req.body.email,
        mobile: req.body.mobile,
        age: req.body.age,
        
    }); 
    channell
        .save(channell)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating your channelling please try again."
            });
        });



};

// Retrieve all appoitnemnts with id
exports.findAllByChannellID = (req, res) => {
    const channellID = req.params.id;
console.log(req.params);
Channell.find({ chanell_id: channellID })
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving chanelling."
            });
        });
};

// Update a channelling by the id in the request
exports.update = (req, res) => {

};

// Delete a channelling with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all channells from the database.
exports.deleteAll = (req, res) => {

};
