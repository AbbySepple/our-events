var express = require('express');
var router = express.Router();
var passport = require('passport');
var Item = require('../models/items.model');
var path = require('path');



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

module.exports = router;
