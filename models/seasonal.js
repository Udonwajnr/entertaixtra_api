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
      this.hasMany(Episode,{foreignKey:"seasonalId",as:'episode'})
      // define association here
    }
    toJSON(){
      return {...this.get(),id:undefined}
    }
  }
  Seasonal.init({
    uuid: {
      type:DataTypes.UUID,
      allowNull:false,
      defaultValue:DataTypes.UUIDV4
    },
    title:  {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },

    year:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    genre:  {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    language:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    description:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false
    },
    poster_image:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    trailer_url:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    number_of_episodes:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    actors:  {
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    }
    

    
  }, {
    sequelize,
    modelName: 'Seasonal',
  });
  return Seasonal;
};