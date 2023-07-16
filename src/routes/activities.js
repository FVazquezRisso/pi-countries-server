const { Router } = require("express");
const postActivity = require("../controllers/postActivity");
const getActivities = require("../controllers/getActivities");

const router = Router();

router.post("/", async (req, res) => {
  const createdActivity = await postActivity(req.body);

  if (createdActivity.error) {
    res.status(400).json({ error: createdActivity.error });
  } else {
    res.status(200).json(createdActivity);
  }
});

router.get("/", async (req, res) => {
  const activities = await getActivities();
  res.status(200).json(activities);
});

module.exports = router;
