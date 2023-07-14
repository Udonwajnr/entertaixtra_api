'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Seasonal}) {
      // define association here

      this.belongsTo(Seasonal,{foreignKey:"seasonalId",as:'seasonal'})
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  }
  Episode.init({
    uuid: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    year:{
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
      type:DataTypes.STRING,
      allowNull:false

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
      allowNull:false
    },
    actors: {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    }
  },
  
  {
    sequelize,
    modelName: 'Episode',
  });
  return Episode;
};