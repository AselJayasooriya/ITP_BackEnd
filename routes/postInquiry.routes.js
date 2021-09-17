module.exports = app => {
    const inquiry = require("../controllers/postInquiry.controller")
    let router = require("express").Router();

    // Create a new inquiruy
    router.post("/add", inquiry.create);
     
    // Retrieve all inquiry with given inquriy ID
    router.get("/", inquiry.findAll);

    // Update a Inquiry with id
    router.put("/:id", inquiry.put);

    // Delete a inquriy with id
    router.delete("/:id", inquiry.delete);

 
    app.use('/api/inquiry', router);
};