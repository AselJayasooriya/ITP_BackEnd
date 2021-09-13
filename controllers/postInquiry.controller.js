const db = require("../models");
const Inquiry = db.inquiry;


// Create and Save a new Inquiry

exports.create = (req, res) => {
    console.log(req.body);
    //Create a Inquiry
    const inquiry = new Inquiry({
        title: req.body.Title,
        message: req.body.Message,
     
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
exports.findAllByInquiryID = (req, res) => {
    const inquiryID = req.params.id;
console.log(req.params);
Inquiry.find({ inquiry_id: inquiryID })
        .then(data => {
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving inquiry."
            });
        });
};

// Update a channelling by the id in the request
exports.put = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message:"Data you want to update cannot be empty!"
        });
    }

    const id= req.params.id;
    
    Inquiry.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data =>{
        if (!data){
            res.status(400).send({
                message:'Cannot update the inqury of id =${id} May be inuqiry was not found!'
            });
        }else res.send({ message: 'Inquiry was sucessfully updated'});
    })
    .catch(err =>{
        res.status(500).send({
            message:'Error updating inquiry with id :'+id
        });
    })

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

