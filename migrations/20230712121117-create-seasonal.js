'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seasonals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uuid: {
        type:Sequelize.UUID,
        allowNull:false,
        defaultValue:Sequelize.UUIDV4
      },
      title: {
        type: Sequelize.STRING,
        allowNull:false
      },
      year: {
        type: Sequelize.STRING,
        allowNull:false
      },
      title:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      year:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      genre:  {
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull:false
      },
      language:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      description:  {
      type:Sequelize.TEXT,
      allowNull:false,
      defaultValue:"HD"
      },
      image:{
        type:Sequelize.STRING,
        allowNull:false
      },
      poster_image:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      trailer_url:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      number_of_episodes:  {
        type:Sequelize.STRING,
        allowNull:false
      },
      actors:  {
        type:Sequelize.ARRAY(Sequelize.STRING),
        allowNull:false
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
    await queryInterface.dropTable('Seasonals');
  }
};