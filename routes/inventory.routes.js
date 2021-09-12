module.exports = app => {
    const inventories = require("../controllers/inventory.controller");

    let router = require("express").Router();

    //create new inventoryItem
    router.post("/",inventories.create);

    app.use('/api/inventories',router);
}