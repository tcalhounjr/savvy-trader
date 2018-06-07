const express = require('express');
const router = express.Router();
const passport = require('passport');

// Requiring our Stocks model
const db = require("../models");
// const model = require("../models/index.js");



// Routes
// =============================================================
module.exports = function(app) {

    //GET route for authenticating users
    app.get('/auth/google', passport.authenticate('google',  { scope: ['https://www.googleapis.com/auth/plus.login'] }));

    //Callback route for google redirect
    app.get('/auth/google/callback', passport.authenticate('google',{ failureRedirect: '/login' }), 
    function(req, res) {
      console.log('you made it');
      res.redirect('/profile');
    });

    // GET route for getting all of the users
    app.get("/api/users/", function(req, res) {
      db.Users.findAll({})
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });
  
    // Get route for returning users of a specific category
    app.get("/api/users/category/:category", function(req, res) {
      db.Users.findAll({
        where: {
          category: req.params.category
        }
      })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });
  
    // Get route for retrieving a single User
    app.get("/api/users/:id", function(req, res) {
      db.Users.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
      // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
      // So we're sending the user back the route to the members page because the redirect will happen on the front end
      // They won't get this or even be able to access this page if they aren't authed
      console.log(req.body);
      db.Users.create({
        googleId: req.body.title,
        username: req.body.body,
      })
        .then(function(dbUser) {
          res.redirect("/profile/:id");
        });
      
    });

    // app.get("api/profile/:id")
  
    // POST route for saving a new User
    app.post("/api/users", function(req, res) {
      console.log(req.body);
      db.Users.create({
        googleId: req.body.title,
        username: req.body.body,
      })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });
  
    // DELETE route for deleting users
    app.delete("/api/users/:id", function(req, res) {
      db.Users.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });
  
    // PUT route for updating users
    app.put("/api/users", function(req, res) {
      db.Users.update(req.body,
        {
          where: {
            id: req.body.id
          }
        })
        .then(function(dbUser) {
          res.json(dbUser);
        });
    });
  };
