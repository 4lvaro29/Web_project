var express = require("express"),
path = require("path"),
var app = express(),
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/'));

    app.listen(port,function(){
      console.log(`server ok listen in port #{port}`)
    
    });