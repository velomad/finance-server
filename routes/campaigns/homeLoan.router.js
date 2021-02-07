const router = require("express").Router();
const controller = require("../../controller/campaigns/homeLoan.controller.js");

// GET
router.get("/", controller.getAllHomeLoan);

// POST
router.post("/addhomeloan", controller.addHomeLoan);

module.exports = router;
