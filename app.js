const
  bodyParser = require('body-parser');

const
  express = require('express'),
  app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + 'public'));
app.set('view engine', 'pug');


app.use(require('./app/routes'));


module.exports = app;
