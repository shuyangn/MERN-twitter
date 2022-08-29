const JwtStrategy = require('passport-jwt').Strategy;     //handle tokens
const ExtractJwt = require('passport-jwt').ExtractJwt;    //
const mongoose = require('mongoose');                     // user model
const User = mongoose.model('users');                     // import user model
const keys = require('./keys');  

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();    // built-in in passport jwt, extract the bear token from header
options.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(options, (jwt_payload, done) => {
    // This payload includes the items we specified earlier
    console.log(jwt_payload);
    done();
  }));
}