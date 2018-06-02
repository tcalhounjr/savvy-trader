const express = require('express');
const router = express.Router();

var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Homepage.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../Login.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../Profile"));
  });

};
