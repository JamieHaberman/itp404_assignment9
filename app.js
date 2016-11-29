var dotenv = require('dotenv');
dotenv.config();
var express = require('express');
var app = express()
var cors = require('cors');
var bodyParser = require('body-parser');

var yelp = require('./api/yelp');

app.use(cors());
app.use(bodyParser());

app.get('/results/:s/:l?', function(request, response) {
  yelp.search({ term: request.params.s, location: request.params.l || 'Toronto'}).then(function(results) {
    response.json(results);
  }, function(err) {
    response.json(err);
  });
});

app.listen(3000);
