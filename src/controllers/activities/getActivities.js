const { Activity, Country } = require("../../db");

const getActivities = async (userId) => {
  const allActivities = await Activity.findAll({
    where: { UserId: userId },
    include: [{ model: Country, through: { attributes: [] } }],
  });
  return allActivities;
};

module.exports = getActivities;
