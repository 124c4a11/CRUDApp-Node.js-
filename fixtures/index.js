const
  mongoose = require('../libs/mongoose');
  Event = require('../models/event'),
  events = require('./events');


(async () => {
  await Event.deleteMany();

  for (let event of events) {
    const ev = new Event(event);
    await ev.save();
  }

  mongoose.disconnect();
  console.log(`All done, ${events.length} users have been saved in DB`);
})();
