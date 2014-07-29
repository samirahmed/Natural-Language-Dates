var http = require('datejs')
var express = require('express')
var http = require('http')
var port = process.env.PORT || 1337;

var app = express();

app.get('/', function(req, res) {
  var querystring = req.query.date
  res.send( Date.parse(querystring) + '\n');
 });
    
app.listen(port);

