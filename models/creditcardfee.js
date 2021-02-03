module.exports = (sequelize, DataTypes) => {
  const CreditCardFee = sequelize.define(
    "CreditCardFee",
    {
      creditCardId: DataTypes.INTEGER,
      firstYear: DataTypes.INTEGER,
      renewal: DataTypes.INTEGER,
    },
    {}
  );

  CreditCardFee.associate = function (models) {
    CreditCardFee.belongsTo(models.CreditCardCampaign, {
      foreignKey: "creditCardId",
      as: "feeStructure",
      onDelete: "CASCADE",
    });
  };

  return CreditCardFee;
};
