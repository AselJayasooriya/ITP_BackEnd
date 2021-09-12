module.exports = app => {
    const notes = require("../controllers/doctorNote.controller");

    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/", notes.create);

    app.use('/api/notes', router);

};