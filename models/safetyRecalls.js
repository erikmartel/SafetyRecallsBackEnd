const mongoose = require('mongoose');

const { Schema } = mongoose;

const safetyRecalls = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
  }
);

module.exports = mongoose.model('drivers', safetyRecalls);
