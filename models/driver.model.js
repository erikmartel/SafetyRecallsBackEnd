const mongoose = require('mongoose');

const { Schema } = mongoose;

const Driver = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
  }
);

module.exports = mongoose.model('drivers', Driver);
