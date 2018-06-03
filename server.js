// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const initPassport = require('./config/passport');


// Models
//==============================================================
const db = require("./models");

// Sets up the Express App to handle data parsing
// =============================================================
const app = express();
var PORT = process.env.PORT || 3000;


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

//Static directory
app.use(express.static("public"));

//Routes
//=============================================================
require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);

// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});