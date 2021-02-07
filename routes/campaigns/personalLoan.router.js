const router = require("express").Router();
const controller = require("../../controller/campaigns/personalLoan.controller");

// GET
router.get("/personalloan", controller.getAllPersonalLoan);

// POST
router.post("/addpersonalloan", controller.addPersonalLoan);

module.exports = router;
