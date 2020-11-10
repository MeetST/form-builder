import express from 'express'
import bodyParser from 'body-parser'
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
import initAPISVersions from './api'
import config from './config'
import User from './api/v1/models/user'

const GOOGLE_CLIENT_ID = config.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = config.GOOGLE_CLIENT_SECRET;

const app = express()
let userProfile;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', true)
  res.header('Access-Control-Allow-Origin', "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', "Content-Type");
  next()
})


app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.SESSION_SECRET_TOKEN,
  store: new MongoStore({
    url: config.database.mongoURL + 'form_builder',
    collection: 'sessions'
  })
}));


app.use(passport.initialize());
app.use(passport.session());

app.get('/', function (req, res) {
  res.render('pages/auth');
});


app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function (user, cb) {
  console.log('serializeUser', user)
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  console.log('deserializeUser', obj)
  cb(null, obj);
});


passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5200/create-survey"
},
  function (accessToken, refreshToken, profile, done) {
    console.log("accessToken", accessToken)
    console.log("refreshToken", refreshToken)
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
    // return done(null, userProfile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  function (req, res) {
    // Successful authentication, redirect success.
    // res.redirect('/success');
    res.status(200).send({
      message: 'success'
    });
  });



// initilize API versions
initAPISVersions(app, '')

module.exports = app
