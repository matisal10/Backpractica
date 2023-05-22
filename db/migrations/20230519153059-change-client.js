'use strict';
const { Model, DataTypes, Sequelize } = require('sequelize');
const { CLIENT_TABLE, ClientSchema } = require('../models/client.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.changeColumn(CLIENT_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    })
  },

  async down(queryInterface) {
    
  }
};
