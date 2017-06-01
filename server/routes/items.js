var express = require('express');
var router = express.Router();
var passport = require('passport');
var Item = require('../models/items.model');
var path = require('path');

router.post('/', function(req, res){
  console.log('inside post for items');
  var newItem = new Item(req.body);
  newItem.save(function(err){
    if(err){
      res.sendStatus(500);
      console.log(err);
    }
    else {
      res.sendStatus(201);

    }
  });
});

router.get('/', function (req, res) {
  console.log('in get items route');
  Item.find(req.body, function(err, data){
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
