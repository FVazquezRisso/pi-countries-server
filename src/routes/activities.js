const { Router } = require("express");
const postActivity = require("../controllers/activities/postActivity");
const getActivities = require("../controllers/activities/getActivities");
const deleteActivity = require("../controllers/activities/deleteActivity");
const updateActivity = require("../controllers/activities/updateActivity");

const router = Router();

router.post("/", async (req, res) => {
  const createdActivity = await postActivity(req.body);

  if (createdActivity.error) {
    res.status(400).json({ error: createdActivity.error });
  } else {
    res.status(200).json(createdActivity);
  }
});

router.get("/:userId", async (req, res) => {
  const activities = await getActivities(req.params.userId);
  res.status(200).json(activities);
});

router.delete("/:activityId", async (req, res) => {
  const deletedActivity = await deleteActivity(req.params.activityId);

  if (deletedActivity.error) {
    res.status(400).json({ error: deletedActivity.error });
  } else {
    res.status(200).json(deletedActivity);
  }
});

router.put("/:activityId", async (req, res) => {
  const updatedActivity = await updateActivity(req.params.activityId, req.body);

  if (updatedActivity.error) {
    res.status(400).json({ error: updatedActivity.error });
  } else {
    res.status(200).json(updatedActivity);
  }
});

module.exports = router;
