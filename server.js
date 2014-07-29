var http = require('datejs')
var express = require('express')
var port = process.env.PORT || 1337;
var app = express();

app.get('/', function(req, res) {
  var querystring = req.query.date
  res.send( Date.parse(querystring).toString('d-MMM-yyyy'));
 });
    
app.listen(port);

