var express = require('express');
var router = express.Router();
var passport = require('passport');
var Item = require('../models/items.model');
var path = require('path');


// get individual event by ID
router.get('/:eventId', function (req, res) {
  console.log('in get items route');
  Item.find({_id: req.params.eventId}, function(err, data){
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('data ->', data);
      res.send(data);
    }
  });
});


//delete individual event by ID
router.delete('/:id', function(req, res) {
  var eventIdToDelete = req.params.id;
  Item.remove({ _id: eventIdToDelete }, function(err) {
    if (err) {
      console.log('Error removing event from database', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});


//updateEvent
router.put('/updateEvent', function(req, res){
  console.log('router: ', req.body);
  var newEventIdUpdate = Item(req.body);
  console.log('new event id:', newEventIdUpdate );
  Item.findByIdAndUpdate(req.body._id, {$set: {name: req.body.name, date: req.body.date, time: req.body.time, location: req.body.location, description: req.body.description}}, function(err){
    if (err) {
      console.log('Error updating DB', err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });

});







module.exports = router;
