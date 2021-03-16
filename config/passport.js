const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../config/keys');
const Keys = require('../config/keys');
const User=require('mongoose').model('users')
opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey


module.exports = passport => {
    passport.use(new JwtStrategy(
        opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id).then(user => {
                if (user) {
                    return done(null,user)
                }
                return done(null,false)
            })
            .catch(err=>console.log(err))
        }
    ))
}

