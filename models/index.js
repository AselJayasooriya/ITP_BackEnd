const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.sessions = require("./doctorSession.model")(mongoose);
db.notes = require("./doctorNote.model")(mongoose);
db.prescriptions = require("./doctorPrescription.model")(mongoose);

module.exports = db;