'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  }
  Movie.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    uuid: {
      type:DataTypes.UUID,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    year: {
      type:DataTypes.STRING,
      allowNull:false

    },
    genre: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false

    },
    language: {
      type:DataTypes.STRING,
      allowNull:false

    },
    description: {
      type:DataTypes.STRING(1024),
      allowNull:false,
      defaultValue:"HD"
    },
    length_of_video: {
      type:DataTypes.STRING,
      allowNull:false

    },
    image: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }

    },
    poster_image: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    trailer_url: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    file_link: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    subtitle_link: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    video_quality:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"HD"
    },
    actors: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};