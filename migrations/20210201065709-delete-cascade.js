"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("CreditCardFees", "creditCardId", {
      type: Sequelize.INTEGER,
      allownull: false,
      onDelete: "CASCADE",
      references: {
        model: "CreditCardCampaign",
        key: "id",
        as: "feeStructure",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
