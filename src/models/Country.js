const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [3, 100],
        },
      },

      flag: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      continent: {
        type: DataTypes.ENUM(
          "North America",
          "South America",
          "Europe",
          "Asia",
          "Africa",
          "Oceania",
          "Antarctica"
        ),
        allowNull: false,
      },

      capital: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      subregion: {
        type: DataTypes.STRING,
      },

      area: {
        type: DataTypes.FLOAT,
      },

      population: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
        },
      },
    },
    { timestamps: false }
  );
};