const db = require("../models");
const MdRequest = db.mdrequest;


// Create and Save a new Inquiry

exports.create = (req, res) => {
    // console.log(req.body);
    //Create a Inquiry
    const MdRequest = new MdRequest({
        drugid: req.body.drugid,
        medicinename: req.body.medicinename,
        mqty: req.body.mqty,
     
    });

    //Save Inquiry to the database
    mdrequest
        .save(mdrequest)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating your Inquiry please try again."
            });
        });



};

// Retrieve all purchasae requests with id given from
exports.findAll = (req, res) => {
    MdRequest.find()
      .then((data) => {
        res.json(data);
        // console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  
//Find a single purchase request with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Inquiry.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found request with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving request with id=" + id });
      });
  };