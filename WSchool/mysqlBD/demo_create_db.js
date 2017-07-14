var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ""
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");

	//create DB
	con.query("CREATE DATABASE mydbnodejs", function(err, result){
		if(err) throw err;
		console.log("Database created");
	});
});