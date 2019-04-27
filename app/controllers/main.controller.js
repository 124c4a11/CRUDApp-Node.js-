const Event = require('../../models/event');


module.exports = {
  showHome
};


function showHome(req, res) {
  const events = [
    { name: 'Basketball', slug: 'basketball', description: 'Throwing ingo a basket.' },
    { name: 'Swimming', slug: 'swimming', description: 'Michael Phels is the fast fish.' },
    { name: 'Weightlifting', slug: 'weightlifting', description: 'Lifting heavy things up' },
  ];

  res.render('pages/home', { events });
};
