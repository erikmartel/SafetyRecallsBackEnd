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
