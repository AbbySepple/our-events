var express = require('express');
var router = express.Router();

var twilio = require('twilio');
// var TMClient = require('textmagic-rest-client');

var accountSid = 'ACCOUNT_SID';
var authToken = 'AUTH_TOKEN';

var client = twilio(accountSid, authToken);
// var tmClient = new TMClient('USERNAME', 'API KEY');

router.post('/', function(req, res) {
  console.log("req body: ", req.body);
  client.messages.create({
    to: req.body.number,
    from: "+17639511536",
    body: req.body.content,
  }, function(err, message) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(message.sid);
      res.sendStatus(200);
    }
  });
});

module.exports = router;
