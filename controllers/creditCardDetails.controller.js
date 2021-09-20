const e = require("express");
const db = require("../models");
const nodemailer = require("nodemailer");
const Credit = db.creditCardPayments;

// Create and Save a new creditCard

exports.create = (req, res) => {
  // console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "ispirithalei@outlook.com",
      pass: "@waCamDa!69",
    },
  });

  const options = {
    from: "ispirithalei@outlook.com",
    to: req.body.email,
    subject: "E-Bill",
    text: "Dear " + req.body.name + ",",
    html: "<h1>Payment Successful</h1>",
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("sent: " + info.response);
  });

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
      // console.log(data);
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
      // console.log(data);
    })
    .catch((err) => {
      alert(err);
    });
};

// Retrieve all Sessions with matching Payment ID from the database.
exports.findAllByDPaymentID = (req, res) => {
  const paymentID = req.params.id;
  // console.log(req.params);
  Credit.find({ _id: paymentID })
    .then((data) => {
      res.send("retruned with id" + data);
      // console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving CreditCard.",
      });
    });
};

exports.update = (req, res) => {
  let id = req.params.id;
  let Amount = req.body.amount;

  Credit.findByIdAndUpdate(
    { _id: id },
    { amount: Amount },
    { useFindAndModify: false }
  )
    .then(() => {
      // console.log("upadated from front end");
      res.status(200).send({ status: "user updated" + id });
    })
    .catch((e) => {
      // console.log(e);
      res.status(400).send({ status: "error in delete operation:" + e });
    });
};

exports.delete = (req, res) => {
  // console.log("delete method executed");
  let Id = req.params.id;
  Credit.findOneAndDelete({ _id: Id })
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((e) => {
      // console.log(e);
      res.status(400).send({ status: "error in delete operation" });
    });
};
