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

	var name = 'Amy';
	var adr = 'Mountain 21';
	var sql = 'DELETE FROM customers WHERE name = ? OR address = ?';

	con.query(sql, [name, adr], function(err, result){
		if(err) throw err;
		console.log("Number of records deleted: " + result.affectedRows);
		console.log(result);
	});
});