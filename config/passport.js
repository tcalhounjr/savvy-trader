var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const devCredentials = require('./client_id.json');
const prodCredentials = require('./client_id.json');
const db = require("../models");

//   Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.

passport.use(new GoogleStrategy({
    clientID: devCredentials.web.client_id,
    clientSecret: devCredentials.web.client_secret,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
    console.log(profile.id);
    db.Users.findOne({where: {googleId: profile.id}})
      .then(function(dbUser) {
        if (!dbUser) {
          res.redirect('/api/login');
        }
        else {
          console.log(dbUser);
          return done(err, dbUser);
        }
      });

    // db.Users.findOrCreate({where: {googleId: profile.id}, defaults: {email: profile.email}}, function (err, user) {
    //   return done(err, user);
    // });
}
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;