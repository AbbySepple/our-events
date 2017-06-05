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

//fucntion to access google map provided by Google
// function onSuccess(googleUser) {
//   // console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
// }//end onSuccess
//
// function onFailure(error) {
//   console.log(error);
// }//end onFailure
//
// function renderButton() {
//   gapi.signin2.render('my-signin2', {
//     'scope': 'profile email',
//     'width': 240,
//     'height': 50,
//     'longtitle': true,
//     'theme': 'dark',
//     'onsuccess': onSuccess,
//     'onfailure': onFailure
//   });
// }//end renderButtong
//
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }//and onSignIn
// //end of Google provided code



module.exports = router;
