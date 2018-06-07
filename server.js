// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const initPassport = require('./config/passport');
const mysql = require('mysql2');

console.log('hello from vinny')

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



//=====================================
//Functions for api call
//=====================================

const https = require("https");
const IntrinioRealtime = require('intrinio-realtime')
const AlphaVantageAPI = require('alpha-vantage-cli').AlphaVantageAPI;
const request = require('ajax-request');






//Set handlbars for template rendering
//=============================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


//Routes
//=============================================================
require("./controllers/apiRoutes.js")(app);
require("./controllers/htmlRoutes.js")(app);

//api folder
//==============================================================
require("./public/javascript/api_call")

// Starts the server to begin listening
// =============================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});