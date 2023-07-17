const { User, Activity } = require("../../db");

const getUsers = async () => {
  const allUsers = await User.findAll({ include: Activity });
  return allUsers;
};

module.exports = getUsers;
