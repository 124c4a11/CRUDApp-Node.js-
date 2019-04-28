const Event = require('../../models/event');


module.exports = {
  showHome
};


function showHome(req, res) {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(404);
      res.send('Events not found!');
    }

    res.render('pages/home', {
      events,
      success: req.flash('success')
    });
  });
};
