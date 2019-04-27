const
  bodyParser = require('body-parser')
  session = require('express-session'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash');

const
  express = require('express'),
  app = express();


require('dotenv').config();


app.use(cookieParser());

app.use(session({
  secret: process.env.SECRET,
  cookie: { maxAge: 6000 },
  resave: false, // forces the session to be saved back to the store
  saveUnitialize: false // dont save unmodified
}));

app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + 'public'));
app.set('view engine', 'pug');


app.use(require('./app/routes'));


module.exports = app;
