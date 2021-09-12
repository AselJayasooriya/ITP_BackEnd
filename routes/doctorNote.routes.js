module.exports = app => {
    const notes = require("../controllers/doctorNote.controller");

    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/", notes.create);

    // Get all the posted notes by doctors
    router.get("/", notes.getAll);

    app.use('/api/notes', router);

};