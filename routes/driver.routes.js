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

  router.post('/newDriver', async(req, res) => {
/*     const FirstName = "t"
    const LastName = "v" */
    console.log(req.body)
    const FirstName = req.body.first_name

    const LastName = req.body.last_name

    const formData = new Driver({
      first_name: FirstName,
      last_name: LastName
    })
    try {
      formData.save();
      res.send("inserted data..")
  } catch(err) {
      console.log(err)
  }
  });

module.exports = router;