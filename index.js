const server = require("./src/server");
const { conn } = require('./src/db.js');
const llenarBD = require('./llenarDB')

const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}`);
  await llenarBD()
  console.log("La base de datos se llenó con éxito.");
})
}).catch(error => console.error(error))
