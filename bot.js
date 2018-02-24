console.log("The bot is running.")

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


T.post('statuses/update', { status: '' }, function(err, data, response) {
  console.log('sent')
})
