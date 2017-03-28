var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('../database-mysql');
// var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));


app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/items/count', function(req, res) {
	var body;
	var num = ''
	req.on('data', function(chunk) {
	  body += chunk;
	  var array = [];
	  for (var i = 0; i < body.length; i++) {
	    array.push(body[i]);
	  };
	  for (var i = 10; i < array.length-1; i++) {
		  num += array[i];
	  };
    var sum = parseInt(num);
    if (isNaN(sum)) {
      // do nothing
    } else {
      var options = {
       url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/' + sum,

       headers: {'user-agent': 'node.js'}
      };
      request(options, function (err, response, body) {
        if (err) {
          console.log(err);
        } else {
          var bodied = body.split('"');
          for (var i = 1; i < bodied.length-1; i+= 2) {
            items.insertAll(bodied[i]);
          }
        }
      })
    }
	 
	});
	res.sendStatus(201);
	res.end();


});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

