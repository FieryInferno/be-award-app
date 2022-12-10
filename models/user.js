/* eslint-disable require-jsdoc */
'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  }
  User.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
