const { Activity, Country, User } = require("../../db");

const postActivity = async (activityData) => {
  try {
    const { name, difficulty, duration, season, CountryIds, UserId } =
      activityData;

    if (
      !name ||
      !difficulty ||
      !season ||
      !CountryIds ||
      !CountryIds.length ||
      !UserId
    ) {
      throw new Error("Datos insuficientes");
    }

    const newActivity = {
      name,
      difficulty,
      duration: duration ? duration : null,
      season,
      UserId,
    };

    const createdActivity = await Activity.create(newActivity);

    if (!createdActivity) {
      throw new Error("Error creating the activity.");
    }

    const countries = await Country.findAll({
      where: { id: CountryIds },
    });

    if (!countries || countries.length !== CountryIds.length) {
      throw new Error("Invalid countries.");
    }

    await createdActivity.addCountries(countries);

    return { message: `The activity '${name}' has been created.` };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = postActivity;
