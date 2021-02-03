const router = require("express").Router();
const controller = require("../controller/campaigns");

// GET
router.get("/creditcards", controller.getAllCreditCards);
// router.get("/homeloan", controller.getAllHomeLoans);
// router.get("/personalloan", controller.getAllPersonalLoans);

// POST
router.post("/addcreditcard", controller.addCreditCard);
router.post("/addhomeloan", controller.addHomeLoan);
router.post("/addpersonalloan", controller.addPersonalLoan);

module.exports = router;
