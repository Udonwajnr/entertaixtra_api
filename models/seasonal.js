'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seasonal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Episode}) {
      // define association here
      this.hasMany(Episode,{foreignKey:'seasonalId', as:'episode'})
    }
  }
 Seasonal.init({
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
      allowNull:false
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
      validate:{
        isUrl:true
      }
    },
    poster_image:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    trailer_url:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl:true
      }
    },
    number_of_episodes:{
      // mae use of foreign keys here linking episode to seasonal
      type:DataTypes.STRING,
      allowNull:false,
    },
    actors:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false,
    },
  }, {
    sequelize,
    tableName:'seasonal',
    modelName: 'Seasonal',
  });
  return Seasonal;
};