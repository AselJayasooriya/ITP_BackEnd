const db = require("../models");
const EmpDetails = db.empforms;

// Create and Save a new empform

exports.create = (req, res) => {
  //validate request
  if (req.body) {
    res.status(400).send({ message: "content can not be empty" });
  }

  const empform = new EmpDetails({
    role: req.body.role,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
  });

  empform
    .save(empform)
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
  EmpDetails.find({ emp_id: empID })
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

// Delete a form with the specified id in the request
exports.delete = async (req, res) => {
  console.log("delete method executed");
  let Id = req.params.id;
  await EmpDetails.findOneAndDelete({ _id: Id })
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send({ status: "error in delete operation" });
    });
};

// Retrieve all emp details from the database.
exports.getAll = (req, res) => {
  EmpDetails.find()
    .then((data) => {
      res.json(data);
      
    })
    .catch((err) => {
      alert(err);
    });
};

// Update an Emp detail by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  EmpDetails.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update emp details with id=${id}. Maybe emp details was not found!`,
        });
      } else res.send({ message: "emp details was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating emp form with id=" + id,
      });
    });
};

// Delete an empform  with the specified Id in the request
exports.delete = (req, res) => {
  const ID = req.params.id;
  console.log(ID);
  EmpDetails.deleteOne({ _id: ID })
      .then(response => {
          res.send(response);
          console.log(response);
          console.log("deleted")
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Error occured couldn't delete item."
          });
      });
};
