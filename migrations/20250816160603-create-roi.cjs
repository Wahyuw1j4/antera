'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roi', {
      id: {
        type: Sequelize.TEXT,
        primaryKey: true,
        allowNull: false
      },
      villaId: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      okupasi: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      tarifHarian: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      pendapatanKotor: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      biayaOperasional: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      pendapatanBersih: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      roi: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roi');
  }
};
