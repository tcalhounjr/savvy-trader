// Requiring our Stocks model
const db = require("../models");
// const model = require("../models/index.js");



// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the userss
  app.get("/api/stocks/", function(req, res) {
    db.Users.findAll({})
      .then(function(dbusers) {
        res.json(dbusers);
      });
  });
};