const router = require("express").Router();
const controller = require("../../controller/campaigns/savings.controller");

// GET
router.get("/savings", controller.getAllSavings);

// POST
router.post("/addsavings", controller.addSavings);

module.exports = router;
