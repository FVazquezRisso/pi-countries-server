const { Country } = require("../../db");
const { Op } = require("sequelize");

const getAllCountries = async (name) => {
  let countries = null;

  try {
    if (name) {
      countries = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
      });
    } else {
      countries = await Country.findAll();
    }

    if (countries.length === 0)
      throw new Error("No se encontraron países con el nombre especificado");

    return countries;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getAllCountries;
