'use strict';

const { USER_TABLE, UserSchema } = require('../user.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(USER_TABLE,'role',UserSchema.role)
  },

  async down (queryInterface) {
    await queryInterface.renameColumn(USER_TABLE,'role',UserSchema.role)
  }
};
