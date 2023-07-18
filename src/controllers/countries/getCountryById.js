const { Country, Activity } = require("../../db");

const getCountryById = async (idPais) => {
  try {
    let countryFound = null;

    if (idPais) {
      countryFound = await Country.findByPk(idPais, {
        include: [
          {
            model: Activity,
            through: { attributes: [] },
          },
        ],
        attributes: { exclude: ["country_activity"] },
      });
    }

    if (countryFound) return countryFound;
    else throw new Error("Failed to process the request.");
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getCountryById;
