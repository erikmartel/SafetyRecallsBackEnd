const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://127.0.0.1:27017/safetyRecalls');
const recallsRouter = express.Router();
const port = process.env.PORT || 4000;
const Recalls = require('./models/safetyRecalls');


recallsRouter.route('/drivers')
  .get((req, res) => {
    const query = {};
    if (req.query.first_name) {
      query.first_name = req.query.first_name;
    }
    Recalls.find(query, (err, drivers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(drivers);
    });
  });

app.use('/api', recallsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Nodemon API!');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
