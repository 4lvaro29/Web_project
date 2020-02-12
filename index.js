var express = require("express"),
var path = require("path"),
var app = express(),
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public/'));

    app.listen('3000',function(){
      console.log(`server ok listen in port #{port}`)
    
    });