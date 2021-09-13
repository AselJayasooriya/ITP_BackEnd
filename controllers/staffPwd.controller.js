const { empforms } = require("../models");
const db = require("../models");
const Password = db.passwords;

// Create and Save a new empform

exports.create = (req, res) => {
  console.log(req.body);

  const password = new Password({
    role:req.body.role,
    email: req.body.email,
    password: req.body.password
  });
  password
    .save(password)
    .then((data) => {
        console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating your session please try again.",
      });
    });
};

// Retrieve all Employee details with matching emp ID from the database.
exports.findAllByEmpID = (req, res) => {
  const empID = req.params.id;
  console.log(req.params);
  Password.find({ email: empID })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sessions.",
      });
    });
};

// Update a Session by the id in the request
exports.update = (req, res) => {};

// Delete a Session with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Sessions from the database.
exports.deleteAll = (req, res) => {};

exports.findByEmpName = (req, res) => {};
