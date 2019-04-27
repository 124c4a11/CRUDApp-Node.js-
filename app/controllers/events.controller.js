const Event = require('../../models/event');


module.exports = {
  showSingle
}


function showSingle(req, res) {
  const event = { name: 'Basketball', slug: 'basketball', description: 'Throwing ingo a basket.' };

  res.render('pages/single', { event });
}
