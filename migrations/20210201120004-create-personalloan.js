'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personalloans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campaignName: {
        type: Sequelize.STRING
      },
      interestRate: {
        type: Sequelize.FLOAT
      },
      processingFee: {
        type: Sequelize.FLOAT
      },
      tenure: {
        type: Sequelize.INTEGER
      },
      applyUrl: {
        type: Sequelize.STRING
      },
      campaignImageUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Personalloans');
  }
};