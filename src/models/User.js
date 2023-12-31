const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
        validate: {
          len: [4, 20],
        },
      },

      password: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          len: [4, 20],
        },
      },
    },
    { timestamps: false }
  );
};
