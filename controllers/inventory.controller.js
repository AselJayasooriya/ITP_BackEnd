const db = require("../models");
const Inventory = db.inventory;

// Create and Save a new Inventory item
exports.create = (req, res) => {
    console.log(req.body);

    const inventory = new Inventory({
        item_id:req.body.item_id,
          item_name:req.body.item_name ,
          supplier_name: req.body.supplier_name,
          supplier_email: req.body.supplier_email,
          supplier_contact: req.body.supplier_contact,
          purchase_price: req.body.purchase_price,
          registered_date: req.body.registered_date,
          type_medicine: req.body.type_medicine
    });

    //Save Inventory Item in the database
    inventory
        .save(inventory)
        .then(data => {
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Inventory Item."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};