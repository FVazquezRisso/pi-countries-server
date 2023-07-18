const { User } = require("../../db");

const postUser = async (userData) => {
  try {
    const { username, password } = userData;

    if (!username || !password) {
      throw new Error("Insufficient data.");
    }

    const existUser = await User.findOne({ where: { username: username } });

    if (existUser)
      throw new Error(`The username '${username}' already exists.`);

    const newUser = {
      username,
      password,
    };

    const createdUser = await User.create(newUser);

    if (!createdUser) throw new Error("Error creating the user.");

    return createdUser;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = postUser;
