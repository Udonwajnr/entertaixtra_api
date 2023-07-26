'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
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
      genre: {
      type:Sequelize.ARRAY(Sequelize.STRING),
      allowNull:false
    },
    language: {
      type:Sequelize.STRING,
      allowNull:false

    },
    description: {
      type:Sequelize.TEXT,
      allowNull:false,
      defaultValue:"HD"
    },
    length_of_video: {
      type:Sequelize.STRING,
      allowNull:false
    },

    image: {
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },

    poster_image: {
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    trailer_url: {
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    file_link: {
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    subtitle_link: {
      type:Sequelize.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    video_quality:{
      type:Sequelize.STRING,
      allowNull:false,
      defaultValue:"HD"
    },
    actors: {
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
    await queryInterface.dropTable('Movies');
  }
};