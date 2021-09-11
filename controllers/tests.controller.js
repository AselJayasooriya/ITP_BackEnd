const db = require("../models");
const Tests = db.tests;

// Create and Save a new Test
exports.create = (req, res) => {
    console.log(req.body);

    const test = new Tests({
        specimenid: req.body.specimenid,
        subbmitteddate: new Date,
        starteddate: req.body.starteddate,
        completeddate:req.body.completeddate,
        status:"subbmitted",
        contactnumber:req.body.contactnumber,
        patientsname:req.body.patientsname,
        dateofbirth:req.body.dateofbirth,
        testtype:req.body.testtype,
        collectedperson:req.body.collectedperson,
        inchargelabass:req.body.inchargelabass,
        inchargelabassid:req.body.inchargelabassid,
        specimenproperty:req.body.specimenproperty,
        specimenpropertyresult:req.body.specimenpropertyresult,
    });
    test
        .save(test)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating your session please try again."
            });
        });



};

// Retrieve all patients details in tests from the database.
exports.findAll = (req, res) => {

};

// Find a single test with an id
exports.findOne = (req, res) => {

};

// Update a test by the id in the request
exports.update = (req, res) => {

};

// Delete a test with the specified id in the request
exports.delete = (req, res) => {

};



// Find all comleted tests
exports.findAllCompleted = (req, res) => {

};

// Find all subbmitted tests
exports.findAllSubbmitted = (req, res) => {

};

// Find all comleted tests
exports.findAllCompleted = (req, res) => {

};