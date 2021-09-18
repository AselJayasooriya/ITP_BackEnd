module.exports = app => {
    const channell = require("../controllers/echannelling.controller")

    let router = require("express").Router();

    // Create a new channelling
    router.post("/add", channell.create);
     
    // Retrieve all channelling with given chanell ID
    router.get("/byID/:id", channell.findAllByChannellID);

    // Retrieve all channelling with given chanell ID
    router.get("/bystatus/:status", channell.findAllByStatus);
    
    // Update a Session with id
    router.put("/status/:id/:status", channell.updateStatus);

    // Delete a Session with id
    router.delete("/:id", channell.delete);

    // Delete all Sessions
    router.delete("/", channell.deleteAll);

    

   

    app.use('/api/channell', router);
};