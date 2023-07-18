const { Activity } = require("../../db");

const deleteActivity = async (id) => {
  try {
    const deletedActivityCount = await Activity.destroy({
      where: { id },
    });

    if (deletedActivityCount === 0) {
      throw new Error("No activity found with that ID.");
    }

    return { message: "The activity has been successfully deleted." };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = deleteActivity;
