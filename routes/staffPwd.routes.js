module.exports = app => {
    const password = require("../controllers/staffPwd.controller");

    let router = require("express").Router();

    // Create a new password
    router.post("/", password.create);

    // Retrieve all password data with given Emp ID
    router.get("/:id", password.findAllByEmpID);

    // Update a password with id
    router.put("/:id", password.update);

    // Delete a password with id
    router.delete("/:id", password.delete);

    // Delete all passwords
    router.delete("/", password.deleteAll);

    app.use('/api/password', router); //this is the base url
};