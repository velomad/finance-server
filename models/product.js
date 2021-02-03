module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      productName: DataTypes.STRING,
      productPrice: DataTypes.INTEGER,
      discountPercent: DataTypes.INTEGER,
    },
    {}
  );

  return Product;
};
