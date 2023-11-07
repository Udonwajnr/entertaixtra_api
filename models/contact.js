'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    uuid: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
    subject:{
     type:DataTypes.STRING,
     allowNull:false
    },
    message:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },{
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};