const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
<<<<<<< HEAD
db.mongoose = mongoose;
db.url = dbConfig.url;
db.sessions = require("./doctorSession.model")(mongoose);
=======
    db.mongoose = mongoose;
    db.url = dbConfig.url;
    db.sessions = require("./doctorSession.model")(mongoose);
db.creditCardPayments = require("./creditCardDetails.model")(mongoose);
>>>>>>> 3e66c0b0bf9158b2eaef191b532c655b5b73ea38

module.exports = db;
