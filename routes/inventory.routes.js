module.exports = app => {
    const inventories = require("../controllers/inventory.controller");

    let router = require("express").Router();

    //create new inventoryItem
    router.post("/",inventories.create);

    //retrieve all inventories from the database
    router.get("/",inventories.getAll);

    //delete an inventory item from the database
    router.delete("/:id", inventories.delete);

    // Update a Tutorial with id
    router.put("/:id", inventories.update);

    //find single inventory by id
    router.get("/:id", inventories.findOne);

    app.use('/api/inventories',router);
}