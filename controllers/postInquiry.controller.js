const db = require("../models");
const Inquiry = db.inquiry;


// Create and Save a new Inquiry

exports.create = (req, res) => {
    // console.log(req.body);
    //Create a Inquiry
    const inquiry = new Inquiry({
        title: req.body.title,
        message: req.body.message,
     
    });

    //Save Inquiry to the database
    inquiry
        .save(inquiry)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating your Inquiry please try again."
            });
        });



};

// Retrieve all Inquiry with id given from
exports.findAll = (req, res) => {
    Inquiry.find()
      .then((data) => {
        res.json(data);
        // console.log(data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  
//Find a single inquiry with an id:
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Inquiry.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Inquiry with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Inquiry with id=" + id });
      });
  };

//retrieve all Inquiry with seacrh query
exports.searchByQuery = (req, res) => {
    const query = req.params.query;
    
    Inquiry.find({title: {'$regex': query, '$options': 'i'}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send("Some error occurred while retrieving information.");
        });
};





//update a inquiry by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Inquiry.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update test with id=${id}. Maybe test was not found!`
                });
            } else res.send({ message: "Test was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
};



// Delete a inquiry with specific id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Inquiry.findByIdAndRemove(id)
    .then(data =>{
        if(!data){
            res.status(400).send({
                message:'Delete inquiry with id = ${id} maybay not found'
            });
        }else{
            res.send({
                message:'inquiry was sucessfully deleted'
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message:'Cannot delete the inquiry with id ='+id
        });
    });

};

