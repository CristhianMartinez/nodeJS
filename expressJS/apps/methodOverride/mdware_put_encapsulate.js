var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/form', function(req, res){
	res.send('<html><body>'
		     + '<form method="post" action="/proc?_method=put">'
		     + 		'Su nombre: <br>'
			 + 		'<input type="text" name="user" /><br>'
			 + 		'<input type="submit" value="Enviar"/>'
			 + 		'</form>'
			 +		'</html></body>');
});


app.put('/proc', function(req,res){
	// ....(los datos se procesan)
	res.send('Gracias por sus datos '+ req.body.user);
});

app.listen(8000);