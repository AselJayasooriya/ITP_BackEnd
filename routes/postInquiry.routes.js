module.exports = app => {
    const inquiry = require("../controllers/postInquiry.controller")
    let router = require("express").Router();

    // Create a new inquiruy
    router.post("/add", inquiry.create);
     
    // Retrieve all inquiry with given inquriy ID
    router.get("/", inquiry.findAll);

    // Retrieve a single inquiry with id
    router.get("/:id", inquiry.findOne);

    // Update a Inquiry with id
    router.put("/:id", inquiry.update);

    // Delete a inquriy with id
    router.delete("/:id", inquiry.delete);

 
    app.use('/api/inquiry', router);
};