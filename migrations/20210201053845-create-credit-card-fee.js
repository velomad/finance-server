"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CreditCardFees", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      creditCardId: {
        type: Sequelize.INTEGER,
        allownull: false,
        onDelete: "CASCADE",
        references: {
          model: "CreditCardCampaign",
          key: "id",
          as: "feeStructure",
        },
      },
      firstYear: {
        type: Sequelize.INTEGER,
      },
      renewal: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CreditCardFees");
  },
};
