const db = require("../models");
const Credit = db.creditCardPayments;

// Create and Save a new creditCard

exports.create = (req, res) => {
  console.log(req.body);

  const credit = new Credit({
    payment_id: req.body.paymentid,
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    amount: req.body.amount,
  });
  credit
    .save(credit)
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating your CreditCard please try again.",
      });
    });
};

exports.findAll = (req, res) => {
  Credit.find()
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      alert(err);
    });
};

// Retrieve all Sessions with matching Payment ID from the database.
exports.findAllByDPaymentID = (req, res) => {
  const paymentID = req.params.id;
  console.log(req.params);
  Credit.find({ _id: paymentID })
    .then((data) => {
      res.send("retruned with id" + data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving CreditCard.",
      });
    });
};

// // Update a Session by the id in the request
// exports.update = (req, res) => {};
//
// Delete a Session with the specified id in the request

// exports.delete(async (req, res) => {
//   console.log("delete method executed");
//   let Id = req.params.id;
//   await Credit.findOneAndDelete(Id)
//     .then(() => {
//       res.status(200).send({ status: "user deleted" });
//     })
//     .catch((e) => {
//       console.log(e);
//       res.status(400).send({ status: "error in delete operation" });
//     });
// });
// // Delete all Sessions from the database.
// exports.deleteAll = (req, res) => {};

exports.delete = async (req, res) => {
  console.log("delete method executed");
  let Id = req.params.id;
  await Credit.findOneAndDelete({ _id: Id })
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).send({ status: "error in delete operation" });
    });
};
