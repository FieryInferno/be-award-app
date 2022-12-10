/* eslint-disable require-jsdoc */
'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Award extends Model {
    static associate(models) {
    }
  }
  Award.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['Vouchers', 'Products', 'Giftcards'],
      allowNull: false,
    },
    point: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Award',
  });
  return Award;
};
