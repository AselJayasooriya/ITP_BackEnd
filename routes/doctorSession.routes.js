module.exports = app => {
    const sessions = require("../controllers/doctorSession.controller");

    let router = require("express").Router();

    // Create a new Session
    router.post("/", sessions.create);

    // Retrieve all Sessions
    router.get("/", sessions.findAll);

    // Retrieve a single Session with id
    router.get("/:id", sessions.findOne);

    // Update a Session with id
    router.put("/:id", sessions.update);

    // Delete a Session with id
    router.delete("/:id", sessions.delete);

    // Delete all Sessions
    router.delete("/", sessions.deleteAll);

    app.use('/api/sessions', router);
};