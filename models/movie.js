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
  }
  Movie.init({
  uuid:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4
  },
    title:{    
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
    year:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    genre:{ 
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,
    },
    language:{ 
      type:DataTypes.STRING,
      allowNull:false,
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    poster_image:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    trailer_url:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    length_of_video:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    file_link:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    subtitle_link:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    actors:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,
    },
  },{
    sequelize,
    modelName: 'Movie',
    tableName:'movie'
  });
  return Movie;
};