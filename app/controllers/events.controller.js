const Event = require('../../models/event');


module.exports = {
  showSingle,
  showCreate,
  processCreate
}


function showSingle(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err) {
      res.status(404);
      res.send('Event not found!');
    }

    res.render('pages/single', {
      event,
      success: req.flash('success')
    });
  });
}


function showCreate(req, res) {
  res.render('pages/create');
}


function processCreate(req, res) {
  const event = new Event({
    name: req.body.name,
    description: req.body.description
  });

  event.save((err) => {
    if (err) throw err;

    req.flash('success', 'Successfuly creted event!');

    res.redirect(`/${event.slug}`);
  });
}
