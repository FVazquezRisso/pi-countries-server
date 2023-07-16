const { Router } = require("express");
const getAllCountries = require("../controllers/getAllCountries");
const getCountryById = require("../controllers/getCountryById");

const router = Router();

router.get("/", async (req, res) => {
  const countries = await getAllCountries(req.query.name);

  if (countries.error) {
    res.status(404).json({ error: countries.error });
  } else {
    res.status(200).json(countries);
  }
});

router.get("/:idPais", async (req, res) => {
  const country = await getCountryById(req.params.idPais.toUpperCase());

  if (country.error) {
    res.status(404).json({ error: country.error });
  } else {
    res.status(200).json(country);
  }
});

module.exports = router;
