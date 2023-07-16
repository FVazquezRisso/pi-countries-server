const { Activity, Country } = require("../db");

const getActivities = async () => {
  const allActivities = await Activity.findAll({
    include: [{ model: Country, through: { attributes: [] } }],
  });
  return allActivities;
};

module.exports = getActivities;
