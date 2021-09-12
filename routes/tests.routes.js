module.exports = app => {
    const tests = require("../controllers/tests.controller");

    let router = require("express").Router();


    // Retrieve all Sessions with given Doctor ID
    router.get("/subbmitted", tests.findAllSubbmitted);

    // Retrieve all Sessions with given Doctor ID
    router.get("/completed", tests.findAllCompleted);

    // Retrieve all Sessions with given Doctor ID
    router.get("/started", tests.findAllStarted);

    // Create a new Session
    router.post("/", tests.create);

    //geta all test details
    router.get("/", tests.getAll);

    




    app.use('/api/tests', router);

};