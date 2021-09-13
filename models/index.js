const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.sessions = require("./doctorSession.model")(mongoose);
db.creditCardPayments = require("./creditCardDetails.model")(mongoose);
db.inventory = require("./inventory.model")(mongoose);
db.empforms = require("./employeeDetails.model")(mongoose);
db.passwords = require("./staffPwd.model")(mongoose);

module.exports = db;
