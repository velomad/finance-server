module.exports = (sequelize, DataTypes) => {
  const Personalloan = sequelize.define(
    "Personalloan",
    {
      campaignName: DataTypes.STRING,
      interestRate: DataTypes.FLOAT,
      processingFee: DataTypes.FLOAT,
      tenure: DataTypes.INTEGER,
      applyUrl: DataTypes.STRING,
      campaignImageUrl: DataTypes.STRING,
    },
    {}
  );

  return Personalloan;
};
