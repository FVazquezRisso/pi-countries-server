const { User, Activity } = require("../../db");

const getUserById = async (id) => {
  try {
    let userFound = null;

    if (id) {
      userFound = await User.findByPk(id, {
        include: Activity,
      });
    }

    if (userFound) return userFound;
    else throw new Error("Failed to process the request.");
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = getUserById;
