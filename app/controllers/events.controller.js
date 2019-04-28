const Event = require('../../models/event');


module.exports = {
  showSingle,
  showCreate,
  processCreate,
  showEdit,
  processEdit,
  deleteEvent
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
  res.render('pages/create', {
    errors: req.flash('errors')
  });
}


function processCreate(req, res) {
  req.checkBody('name', 'Name is required!').notEmpty();
  req.checkBody('description', 'Description is required!').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors.map((err) => err.msg));
    return res.redirect('/create');
  }

  const event = new Event({
    name: req.body.name,
    description: req.body.description
  });

  event.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        let errors = [];

        for (let error in err.errors) {
          errors.push(err.errors[error].message);
        }

        req.flash('errors', errors);

        return res.redirect('/create');
      }

      throw err;
    }

    req.flash('success', 'Successfuly creted event!');

    res.redirect(`/${event.slug}`);
  });
}


function showEdit(req, res) {
  Event.findOne({ slug: req.params.slug }, (err, event) => {
    if (err) {
      res.status(404);
      res.send('Event not found!');
    }

    res.render('pages/edit', {
      event,
      errors: req.flash('errors'),
      success: req.flash('success')
    });
  });
}


function processEdit(req, res) {
  req.checkBody('name', 'Name is required!').notEmpty();
  req.checkBody('description', 'Description is required!').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors.map((err) => err.msg));
    return res.redirect(`/${req.params.slug}/edit`);
  }

  Event.findOne({ slug: req.params.slug }, (err, event) => {
    event.name = req.body.name;
    event.description = req.body.description;

    event.save((err) => {
      if (err) {
        if (err.name === 'ValidationError') {
          let errors = [];

          for (let error in err.errors) {
            errors.push(err.errors[error].message);
          }

          req.flash('errors', errors);

          return res.redirect(`/${req.params.slug}/edit`);
        }

        throw err;
      }

      req.flash('success', 'Successfuly updated event!');

      res.redirect(`/${req.params.slug}/edit`);
    });
  });
}


function deleteEvent(req, res) {
  Event.remove({ slug: req.params.slug }, (err) => {
    req.flash('success', 'Event deleted!');
    res.redirect('/');
  });
}
