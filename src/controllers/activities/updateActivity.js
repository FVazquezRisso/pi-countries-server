const { Activity } = require("../../db");

const updateActivity = async (id, updatedData) => {
  try {
    const [updatedActivityCount] = await Activity.update(updatedData, {
      where: { id },
    });

    if (updatedActivityCount === 0) {
      throw new Error("No activity found with that ID.");
    }

    return { message: "The activity has been successfully updated." };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = updateActivity;
