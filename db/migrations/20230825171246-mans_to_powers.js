"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("mans_to_powers", {
      manId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "man_id",
        references: {
          model: "supermans",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        primaryKey: true
      },
      powerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: "power_id",
        references: {
          model: "superpowers",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: "updated_at",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("mans_to_powers");
  },
};
