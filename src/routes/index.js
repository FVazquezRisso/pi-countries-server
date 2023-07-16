const { Router } = require("express");
const countriesRouter = require("./countries");
const activitiesRouter = require("./activities");

const router = Router();

router.use("/countries", countriesRouter);
router.use("/activities", activitiesRouter);

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
});

module.exports = router;
