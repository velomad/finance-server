const models = require("../../models")

module.exports = {
    getAllPersonalLoan  :(req, res) => {
        
    },
    addPersonalLoan: async (req, res) => {
        try {
          const personalLoan = await models.Personalloan.create(req.body);
          res.status(200).json({
            results: personalLoan.length,
            personalLoan,
          });
        } catch (e) {
          res.status(500).json({ status: "error", "message ": e.message });
        }
      },
}