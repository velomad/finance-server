module.exports = (sequelize, DataTypes) => {
  const CreditCardCampaign = sequelize.define(
    "CreditCardCampaign",
    {
      cardName: DataTypes.STRING,
      cardImageUrl: DataTypes.STRING,
      cardType: DataTypes.STRING,
      eligibility: DataTypes.FLOAT,
      bank: DataTypes.STRING,
      applyUrl: DataTypes.STRING,
    },
    {}
  );

  CreditCardCampaign.associate = function (models) {
    CreditCardCampaign.hasOne(models.CreditCardFee, {
      foreignKey: "creditCardId",
      as: "feeStructure",
      onDelete: "CASCADE",
    });
  };
  return CreditCardCampaign;
};
