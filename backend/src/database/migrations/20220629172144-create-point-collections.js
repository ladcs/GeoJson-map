'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PointCollections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.NUMBER
      },
      latitude: {
        type: Sequelize.NUMBER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PointCollections');
  }
};