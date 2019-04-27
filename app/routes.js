const
  express = require('express'),
  router = new express.Router();

const
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');


router.get('/', mainController.showHome);


router.get('/:slug', eventsController.showSingle);


module.exports = router;
