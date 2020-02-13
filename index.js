
import express, { static } from 'express';
import { urlencoded, json } from 'body-parser';
const hostname = '127.0.0.1';

var app = express();
var port = process.env.PORT || 8080 ;

// Convierte una petición recibida (POST-GET...) a objeto JSON
app.use(urlencoded({extended:false}));
app.use(json());

app.set('port', (process.env.PORT || 8080));
app.use(static(__dirname + '/'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('*', function(req, res){
  res.render('index.html');
});

app.listen(port, hostname, function(){
  console.log(`Server running in http://localhost:${port}`);
  console.log(`Server running at http://${hostname}:${port}/`);
	console.log('Defined routes:');
	console.log('	[GET] http://localhost:8080/');
});