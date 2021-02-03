module.exports = (sequelize, DataTypes) => {
  const homeloan = sequelize.define(
    "Homeloan",
    {
      campaignName: DataTypes.STRING,
      interestRate: DataTypes.FLOAT,
      processingFee: DataTypes.FLOAT,
      tenure: DataTypes.INTEGER,
      preclosure: DataTypes.FLOAT,
      applyUrl: DataTypes.STRING,
      campaignImageUrl: DataTypes.STRING,
    },
    {}
  );

  return homeloan;
};
