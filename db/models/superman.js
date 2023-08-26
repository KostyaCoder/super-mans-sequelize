"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superman extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Images, Superpowers }) {
      Superman.hasMany(Images, { foreignKey: "manId" });
      
      Superman.belongsToMany(Superpowers, {
        through: "mans_to_powers",
        foreignKey: "manId",
      });
    }
  }
  Superman.init(
    {
      nickname: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      realName: { type: DataTypes.STRING(100), field: "real_name" },
      originDescription: { type: DataTypes.TEXT, field: "origin_description" },
      catchPhrase: { type: DataTypes.STRING, field: "catch_phrase" },
    },
    {
      sequelize,
      modelName: "Superman",
      tableName: "supermans",
      underscored: true,
    }
  );
  return Superman;
};
