const db = require("../models");
const MdRequest = db.mdrequest;


// Create and Save a new Inquiry

exports.create = (req, res) => {
  //console.log(req.body);

  const md = new MdRequest({
      
    drugid:req.body.drugid,
    medicinename:req.body.medicinename,
    mqty:req.body.mqty,
  });
  md
      .save(md)
      .then(data => {
          res.send(data);
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occured while creating your session please try again."
          });
      });



};

exports.getAll = (req, res) => {
  MdRequest.find()
      .then((data) => {
          res.json(data);
          //console.log(data);
      })
      .catch((err) => {
          alert(err);
      });
};

//Retrieve a single inventory item by id
exports.findOne = (req,res) => {
    const id = req.params.id;

    MdRequest.findById(id)
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

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    MdRequest.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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


exports.delete = (req, res) => {
    const id = req.params.id;

    MdRequest.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Tests with id=${id}. Maybe Test was not found!`
                });
            } else {
                res.send({
                    message: "Test was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Test with id=" + id
            });
        });
};