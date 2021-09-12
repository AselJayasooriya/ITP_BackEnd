const db = require("../models");
const Inventory = db.inventory;

// Create and Save a new Inventory item
exports.create = (req, res) => {
    console.log(req.body);

    const inventory = new Inventory({
        item_id: req.body.itemId,
        item_name: req.body.itemName,
        supplier_name: req.body.supplierName,
        supplier_email: req.body.supplierEmail,
        supplier_contact: req.body.supplierContact,
        purchase_price: req.body.purchasePrice,
        registered_date: req.body.registeredDate,
        type_medicine: req.body.typeMedicine
    });

    //Save Inventory Item in the database
    inventory
        .save(inventory)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Inventory Item. Try Again!!"
            });
        });
};

// Retrieve all from the database.
exports.findAll = (req, res) => {

};

// Find a single  with an id
exports.findOne = (req, res) => {

};

// Update a  by the id in the request
exports.update = (req, res) => {

};

// Delete a  with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all s from the database.
exports.deleteAll = (req, res) => {

};

// Find all published 
exports.findAllPublished = (req, res) => {

};