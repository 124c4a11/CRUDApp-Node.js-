const Event = require('../../models/event');


module.exports = {
  showSingle
}


function showSingle(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err) {
      res.status(404);
      res.send('Event not found!');
    }

    res.render('pages/single', { event });
  });
}
