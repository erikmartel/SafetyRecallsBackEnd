const express = require('express');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connect('mongodb://127.0.0.1:27017/safetyRecalls');
const driverRoutes = require('./routes/driver.routes');
const port = process.env.PORT || 4000;
const cors = require('cors');


app.use(cors());

app.use('/api/drivers', driverRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
