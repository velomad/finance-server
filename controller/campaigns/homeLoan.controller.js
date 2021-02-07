const models = require("../../models");

module.exports = {
  getAllHomeLoan: (req, res) => {
    res.send("all home loans response");
  },
  addHomeLoan: async (req, res) => {
    try {
      const homeLoan = await models.Homeloan.create(req.body);
      res.status(200).json({
        results: homeLoan.length,
        homeLoan,
      });
    } catch (e) {
      res.status(500).json({ status: "error", "message ": e.message });
    }
  },
};
