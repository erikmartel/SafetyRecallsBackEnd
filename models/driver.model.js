/* const mongoose = require('mongoose');

const { Schema } = mongoose;

const Driver = new Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
  }
);

module.exports = mongoose.model('drivers', Driver); */

const mongoose = require('mongoose');


const DriverSchema = new mongoose.Schema({
first_name: String,
last_name: String,
Vehicles: [{
    modelYear: Number,
    make: String,
    model: String
}]
})

module.exports = mongoose.model("drivers",DriverSchema)
