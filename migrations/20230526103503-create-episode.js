'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seasonalId:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      title: {
        type: Sequelize.STRING
      },

      year: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      video_quality: {
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Episodes');
  }
};