const
  mongoose = require('../libs/mongoose'),
  slugify = require('slugify');


const EventSchema = new mongoose.Schema(
  {
    name: String,

    slug: {
      type: String,
      unique: true
    },

    description: String
  },
  {
    timestamps: true
  }
);


EventSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});


module.exports = mongoose.model('Event', EventSchema);
