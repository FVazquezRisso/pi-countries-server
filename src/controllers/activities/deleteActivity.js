const { Activity } = require("../../db");

const deleteActivity = async (id) => {
  try {
    const deletedActivityCount = await Activity.destroy({
      where: { id },
    });

    if (deletedActivityCount === 0) {
      throw new Error("No se encontró ninguna actividad con ese ID.");
    }

    return { message: "La actividad ha sido eliminada exitosamente." };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = deleteActivity;
