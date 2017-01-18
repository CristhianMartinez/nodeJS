var express = require('express');
var app = express();


app.get('/', function(req, res){ //atiende ruta /
	res.send('Bienvenido a mi primera aplicación');
});

app.get('/mi_ruta', function(req, res){ //ruta 'mi_ruta'
	res.send('<html><body><h1>Mi ruta</h1></body></html>');
});


app.get('*', function(req, res){ //* Cualquier otra ruta
	res.send('URL incorrecto');
});

app.listen(8000);