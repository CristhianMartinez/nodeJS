var express = require('express');
var app = express();

//en :id? la interrogación indica opcional
// -> Reconoce /user, /user/Pepe,...
app.get('/user/:id?', function(req, res){
	res.send('User ' + (req.params.id || 'anónimo'));
});

//Parametros se restringen con RegExpr entre paréntesis
// '/user1/:id(\\d+)' reconoce '/user1/238' o '/user1/1'
// pero no reconoce '/user1/' o '/user1/a'
app.get('/user1/:id(\\d+)', function(req, res){
	res.send('Usuario '+ req.params.id);
});

app.listen(8000);