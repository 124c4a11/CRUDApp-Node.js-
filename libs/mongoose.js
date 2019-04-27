const
  mongoose = require('mongoose'),
  beautifyUnique = require('mongoose-beautiful-unique-validation');

require('dotenv').config();


mongoose.set('debug', true);
mongoose.plugin(beautifyUnique);
mongoose.connect(process.env.DB_URI);


module.exports = mongoose;
