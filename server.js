var http = require('datejs')
var express = require('express')
var port = process.env.PORT || 1337;
var app = express();

app.get('/', function(req, res) {
    var querystring = req.query.date
    try
    {
        res.send(Date.parse(querystring).setTimezone("PST").toString('yyyy-MM-ddThh:mm:ss-07:00'));
    }
    catch(e) 
    {
        res.send(null, 400);
    }
 });
    
app.listen(port);

