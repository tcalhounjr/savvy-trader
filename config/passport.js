var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const devCredentials = require('./client_id.json');
const prodCredentials = require('./client_id.json');

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
       User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       });
  }
));

// Exporting our configured passport
module.exports = passport;
