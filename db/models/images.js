"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Superman }) {
      Images.belongsTo(Superman, { foreignKey: "manId" });
    }
  }
  Images.init(
    {
      path: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Images",
      tableName: "images",
      underscored: true,
    }
  );
  return Images;
};
