'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('villas', {
      id: {
        type: Sequelize.TEXT,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      harga: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      lokasi: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE(3),
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE(3),
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('villas');
  }
};
