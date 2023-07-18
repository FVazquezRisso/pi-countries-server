const { Router } = require("express");
const countriesRouter = require("./countries");
const activitiesRouter = require("./activities");
const usersRouter = require("./users");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);
router.use("/users", usersRouter);

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error." });
});

module.exports = router;
