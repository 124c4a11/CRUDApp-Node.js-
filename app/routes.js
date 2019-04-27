const
  express = require('express'),
  router = new express.Router();

const
  mainController = require('./controllers/main.controller');


router.get('/', mainController.showHome);


module.exports = router;
