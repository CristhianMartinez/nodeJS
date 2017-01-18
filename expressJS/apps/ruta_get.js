var express = require('express');
var app = express();

//el método 'get(path, MW)' responde a peticiiones 'GET path'
// como respuesta a 'GET path' ejecuta el middleware MW

app.get('/mi_ruta', function(req, res){
	res.send('<html><body><h1>Mi ruta</h1></body></html>');
});
//devuelve página HTML con tipo MIME: text/html

app.listen(8000);