const { Activity } = require("../../db");

const updateActivity = async (id, updatedData) => {
  try {
    const [updatedActivityCount] = await Activity.update(updatedData, {
      where: { id },
    });

    if (updatedActivityCount === 0) {
      throw new Error("No se encontró ninguna actividad con ese ID.");
    }

    return { message: "La actividad ha sido actualizada exitosamente." };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = updateActivity;
