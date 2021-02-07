const router = require("express").Router();
const controller = require("../../controller/campaigns/creditCard.controller");

// GET
router.get("/", controller.getAllCreditCards);

// POST
router.post("/addcreditcard", controller.addCreditCard);

module.exports = router;
