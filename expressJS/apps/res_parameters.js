var express = require('express');
var app = express();


app.get('/mi_ruta', function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('<html><body><h1>Mi ruta</h1></body></html>');
});


app.listen(8000);