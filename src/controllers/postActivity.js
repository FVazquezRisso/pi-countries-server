const { Activity, Country } = require("../db");

const postActivity = async (activityData) => {
  try {
    const { name, difficulty, duration, season, CountryIds } = activityData;

    if (!name || !difficulty || !season || !CountryIds || !CountryIds.length) {
      throw new Error("Datos insuficientes");
    }

    const newActivity = {
      name,
      difficulty,
      duration: duration ? duration : null,
      season,
    };

    const createdActivity = await Activity.create(newActivity);

    if (!createdActivity) {
      throw new Error("Error al crear la actividad");
    }

    const countries = await Country.findAll({
      where: { id: CountryIds },
    });

    if (!countries || countries.length !== CountryIds.length) {
      throw new Error("Países inválidos");
    }

    await createdActivity.addCountries(countries);

    return { message: `Se ha creado la actividad ${name}` };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = postActivity;