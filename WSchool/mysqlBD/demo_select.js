var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "mydbnodejs"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");

	var sql = "SELECT name, address FROM customers";

	con.query(sql, function(err, result, fields){
		if(err) throw err;
		console.log(result);
		console.log(result[2].address);

		//The Fields Object
		console.log(fields);
	});
});