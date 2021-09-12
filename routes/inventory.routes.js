module.exports = app => {
    const inventories = require("../controllers/inventory.controller");

    let router = require("express").Router();

    //create new inventoryItem
    router.post("/",inventories.create);

    //retrieve all inventories from the database
    router.get("/",inventories.getAll);

    app.use('/api/inventories',router);
}