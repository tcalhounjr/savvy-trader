const express = require('express');
const router = express.Router();

var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../homepage.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../profile.html"));
  });

};
