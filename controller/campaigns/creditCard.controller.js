const { Op } = require("sequelize");
const models = require("../../models");

module.exports = {
  getAllCreditCards: async (req, res) => {
    let options = {
      where: {},
      include: [
        {
          model: models.CreditCardFee,
          as: "feeStructure",
          attributes: ["firstYear", "renewal"],
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      order: [],
    };

    // queries
    let cardType = req.query.cardtype;
    let bank = req.query.bank;
    let eligibility = req.query.eligibility;
    let sort = req.query.sort;

    // FILTERS
    if (cardType) {
      options.where["cardtype"] = { [Op.eq]: cardType };
    }
    if (bank) {
      options.where["bank"] = { [Op.eq]: bank };
    }
    if (eligibility) {
      const start = eligibility.split(",")[0];
      const end = eligibility.split(",")[1];
      options.where["eligibility"] = { [Op.between]: [start, end] };
    }

    // SORTING
    if (sort) {
      if (sort == "high") {
        options.order.push([
          { model: models.CreditCardFee, as: "feeStructure" },
          "renewal",
          "DESC",
        ]);
      } else if (sort == "low") {
        options.order.push([
          { model: models.CreditCardFee, as: "feeStructure" },
          "renewal",
          "ASC",
        ]);
      }
    }

    try {
      const cards = await models.CreditCardCampaign.findAll(options);
      res.status(200).json({
        results: cards.length,
        cards,
      });
    } catch (e) {
      res.status(500).json({ status: "error", "message ": e.message });
    }
  },

  addCreditCard: async (req, res) => {
    try {
      const {
        cardName,
        cardImageUrl,
        cardType,
        creditCardId,
        firstYear,
        renewal,
        eligibility,
        bank,
        applyUrl,
      } = req.body;

      var cards = {
        cardName: cardName,
        cardImageUrl: cardImageUrl,
        cardType: cardType,
        eligibility: eligibility,
        bank: bank,
        applyUrl: applyUrl,
        feeStructure: [
          {
            creditCardId: creditCardId,
            firstYear: firstYear,
            renewal: renewal,
          },
        ],
      };

      const card = await models.CreditCardCampaign.create(cards, {
        include: [
          {
            model: models.CreditCardFee,
            as: "feeStructure",
          },
        ],
      });
      res.status(500).json({ card });
    } catch (e) {
      res.status(500).json({ status: "error", "message ": e.message });
    }
  },
};
