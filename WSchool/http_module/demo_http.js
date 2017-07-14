var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'}); //first argument method is the status code, 200 means that all is OK, the second argument is an object containing the response headers.
  	res.write('Hello World!, your URL is ' + req.url); //write a response to the client
  	var q = url.parse(req.url, true).query;
  	var txt = q.year + " " + q.month;
  	res.end(txt); //end the response
}).listen(8080); //the server object listens on port 8080