const db = require("../models");
const MdRequest = db.mdrequest;


// Create and Save a new Purchase request

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

//Retrieve a single request by id
exports.findOne = (req,res) => {
    const id = req.params.id;

    MdRequest.findById(id)
    .then((data) => {
        if (!data)
            res.status(404).send({ message: "Not found Request with id " + id });
        else 
            res.send(data);
    })
    .catch((err) => {
        res.status(500).send({ message: "Error retrieving Request with id=" + id });
      });
};

//update request
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
                    message: `Cannot update Request with id=${id}. Maybe Request was not found!`
                });
            } else res.send({ message: "Purchase Request was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Request with id=" + id
            });
        });
};

//delete request
exports.delete = (req, res) => {
    const id = req.params.id;

    MdRequest.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Request with id=${id}. Maybe Request was not found!`
                });
            } else {
                res.send({
                    message: "Request was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Request with id=" + id
            });
        });
};

//retrieve all Requests with seacrh query
exports.searchByQuery = (req, res) => {
    const query = req.params.query;
    
    MdRequest.find({medicinename: {'$regex': query, '$options': 'i'}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send("Some error occurred while retrieving information.");
        });
};