var http = require('datejs')
var express = require('express')
var port = process.env.PORT || 1337;
var app = express();

app.get('/', function(req, res) {
    var querystring = req.query.date
    try
    {
        res.send(Date.parse(querystring).setTimezone("PST").toString('%Y-%m-%dT%H:%M:%S-07:00'));
    }
    catch(e) 
    {
        res.send(e.toString(), 400);
    }
 });
    
app.listen(port);

