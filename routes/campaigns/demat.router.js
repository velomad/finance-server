const router = require("express").Router();
const controller = require("../../controller/campaigns/savings.controller");

// GET
router.get("/demat", controller.getAllDemat);

// POST
router.post("/adddemat", controller.addDemat);

module.exports = router;
