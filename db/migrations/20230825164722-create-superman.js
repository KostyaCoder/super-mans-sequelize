"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("supermans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      realName: {
        type: Sequelize.STRING(100),
        field: "real_name",
      },
      originDescription: {
        type: Sequelize.TEXT,
        field: "origin_description",
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: "catch_phrase",
      },
      createdAt: {
        allowNull: false,
        field: "created_at",
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        field: "updated_at",
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("supermans");
  },
};
