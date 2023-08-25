"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superpowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Superman }) {
      Superpowers.belongsToMany(Superman, {
        through: "mans_to_powers",
        foreignKey: "powerId",
      });
    }
  }
  Superpowers.init(
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Superpowers",
      tableName: "superpowers",
      underscored: true,
    }
  );
  return Superpowers;
};
