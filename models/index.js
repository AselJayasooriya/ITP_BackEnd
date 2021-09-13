const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.sessions = require("./doctorSession.model")(mongoose);
<<<<<<< HEAD
db.notes = require("./doctorNote.model")(mongoose);
db.prescriptions = require("./doctorPrescription.model")(mongoose);
=======
db.creditCardPayments = require("./creditCardDetails.model")(mongoose);
db.inventory = require("./inventory.model")(mongoose);
db.empforms = require("./employeeDetails.model")(mongoose);
db.passwords = require("./staffPwd.model")(mongoose);
db.tests = require("./tests.model.js")(mongoose);
>>>>>>> 49b4bdfca3ed9a7a25cef9f6f572ad72de50bbc3

module.exports = db;
