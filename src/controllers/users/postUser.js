const { User } = require("../../db");

const postUser = async (userData) => {
  try {
    const { username, password } = userData;

    if (!username || !password) {
      throw new Error("Datos insuficientes");
    }

    const existUser = await User.findOne({ where: { username: username } });

    if (existUser) throw new Error(`El usuario ${username} ya existe.`);

    const newUser = {
      username,
      password,
    };

    const createdUser = await User.create(newUser);

    if (!createdUser) throw new Error("Error al crear el usuario");

    return createdUser;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = postUser;
