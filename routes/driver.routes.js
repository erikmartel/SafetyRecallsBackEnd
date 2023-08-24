const express = require('express');
const router = express.Router();
const Driver = require('../models/driver.model')

//pull all drivers
router.get('/', (req, res) => {
  Driver.find((err, drivers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(drivers);
    });
  });

 router.get('/:id',(req, res) => {
    const query = {};
    Driver.findById(req.params.id, (err, drivers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(drivers);
    });
  });

module.exports = router;