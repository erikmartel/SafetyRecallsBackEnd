const mongoose = require('mongoose');

const { Schema } = mongoose;

const safetyRecalls = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
   /*  vehicles: [{
        modelYear: {type: String },
        make: {type: String },
        model: {type: String }
    }] */
  }
);

module.exports = mongoose.model('Recalls', safetyRecalls);
