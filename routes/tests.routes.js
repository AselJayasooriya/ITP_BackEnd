module.exports = app => {
    const tests = require("../controllers/tests.controller");

    let router = require("express").Router();

    // Create a new Session
    router.post("/", tests.create);


    app.use('/api/tests', router);

};