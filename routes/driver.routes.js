const express = require('express');
const router = express.Router();
const Driver = require('../models/driver.model')

//get all drivers
router.get('/', (req, res) => {
  Driver.find((err, drivers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(drivers);
    });
  });

//get specific driver by id
 router.get('/:id',(req, res) => {
    const query = {};
    Driver.findById(req.params.id, (err, drivers) => {
      if (err) {
        return res.send(err);
      }
      return res.json(drivers);
    });
  });

//add a new driver
  router.post('/newDriver', async(req, res) => {
    console.log(req.body)
    const FirstName = req.body.first_name
    const LastName = req.body.last_name
    const makeName = req.body.make
    const modelName = req.body.model
    const modelYear = req.body.modelyear

    const formData = new Driver({
      first_name: FirstName,
      last_name: LastName,
      Vehicles: [{
        modelYear: modelYear,
        make: makeName,
        model:modelName
    }]
    })
    try {
      formData.save();
      res.send("inserted data..")
  } catch(err) {
      console.log(err)
  }
  });


//add vehicle to driver by a specific driver by id
router.route('/updateVehicle').patch(function(req,res){
  const driverId = req.body.id
  const makeName = req.body.make
  const modelName = req.body.model
  const modelYear = req.body.modelyear
  Driver.findByIdAndUpdate(driverId, {Vehicles:[{model:modelName, modelYear: modelYear, make: makeName}]},
  function(err, result){

    if(err){
        res.send(err)
    }
    else{
        res.send(result)
        console.log("updated vehicles...")
  }

})
});

//Delete specific driver by id
router.delete('/:id',(req, res) => {
  const query = {};
  Driver.findByIdAndDelete(req.params.id, (err, drivers) => {
    if (err) {
      return res.send(err);
    }
    return res.json(drivers);
    console.log("Driver Deleted")
  });
});

// Delete a vehicle by id
router.delete('/:userid/vehicles/:vehicleid',(req,res) => {
  console.log('route called')
  Driver.findByIdAndUpdate(req.params.userid, {$pull : {Vehicles:{_id: req.params.vehicleid}}} ,(err, drivers)=>{
    if (err) {
      return res.send(err);
    }
    return res.json(drivers);  
  })
})




module.exports = router;