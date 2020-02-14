
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080 ;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function(req, res){
  res.render('index.html');
});

app.listen(port, function(){
  console.log(`Server running in http://localhost:${port}`);
	
	
});