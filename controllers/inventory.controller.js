const db = require("../models");
const Inventory = db.inventory;

// Create and Save a new Inventory item
exports.create = (req, res) => {
    const inventory = new Inventory({
        item_id: req.body.item_id,
        item_name: req.body.item_name,
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
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Inventory Item. Try Again!!"
            });
        });
};

// Retrieve all Inventories from the database.
exports.getAll = (req, res) => {
    Inventory.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            alert(err);
        });
};


// Update an Inventory by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Inventory.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Inventory with id=${id}. Maybe Inventory was not found!`
                });
            } else res.send({ message: "Inventory was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Inventory with id=" + id
            });
        });
};

// Delete an Inventory  with the specified itemId in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Inventory.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Inventory with id=${id}. Maybe Inventory was not found!`
                });
            } else {
                res.send({
                    message: "Inventory was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Inventory with id=" + id
            });
        });
};

//Retrieve a single inventory item by id
exports.findOne = (req,res) => {
    const id = req.params.id;

    Inventory.findById(id)
    .then((data) => {
        if (!data)
            res.status(404).send({ message: "Not found Ineventory with id " + id });
        else 
            res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: "Error retrieving Inventory with id=" + id });
      });
};



