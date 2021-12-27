var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
const db = require("./config/db.config");
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});
require("./route/book.route")(app);
app.listen(3000, () => {
  console.log("server is running at port 3000..");
});