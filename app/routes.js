const
  express = require('express'),
  router = new express.Router();

const
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');


router.get('/', mainController.showHome);


router.get('/create', eventsController.showCreate);
router.post('/create', eventsController.processCreate);


router.get('/:slug/edit', eventsController.showEdit);


router.get('/:slug/delete', eventsController.deleteEvent);


router.post('/:slug', eventsController.processEdit);
router.get('/:slug', eventsController.showSingle);


module.exports = router;
