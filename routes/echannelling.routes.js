module.exports = app => {
    const channell = require("../controllers/echannelling.controller")

    let router = require("express").Router();

    // Create a new channelling
    router.post("/add", channell.create);
     
    // Retrieve all channelling with given chanell ID
    router.get("/:id", channell.findAllByChannellID);

    // Update a Session with id
    router.put("/:id", channell.update);

    // Delete a Session with id
    router.delete("/:id", channell.delete);

    // Delete all Sessions
    router.delete("/", channell.deleteAll);

    

   

    app.use('/api/channell', router);
};