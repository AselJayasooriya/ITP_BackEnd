const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
    db.mongoose = mongoose;
    db.url = dbConfig.url;
    db.sessions = require("./doctorSession.model")(mongoose);
    db.channell = require("./echannelling.model")(mongoose);
    db.inquiry = require("./postInquiry.model")(mongoose);

module.exports = db;