const { Country } = require('./src/db')
const axios = require('axios')

module.exports = async () => {

  const { data } = await axios("http://localhost:5000/countries");
  data.forEach(country => {
    const newCountry = {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.png,
      continent: country.continents[0],
      capital:
        Array.isArray(country.capital) && country.capital.length > 0
          ? country.capital[0]
          : '',
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
    Country.create(newCountry)
  });
}