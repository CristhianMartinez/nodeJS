var express = require('express');
var path = require('path');
var app = express();

//Sirve paginas del directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

//el método 'get(path, MW)' responde a peticiiones 'GET path'
// como respuesta a 'GET path' ejecuta el middleware MW

app.get('/mi_ruta', function(req, res){
	res.send('<html><body><h1>Mi ruta</h1>'+req+'</body></html>');
});
//devuelve página HTML con tipo MIME: text/html

app.listen(8000);