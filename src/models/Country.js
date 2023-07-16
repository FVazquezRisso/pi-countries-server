const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Country", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [0, 3],
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.FLOAT
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },{timestamps: false});
};