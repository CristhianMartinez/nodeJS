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

	//insert 1 record
	var sql = "INSERT INTO customers (name, address) VALUES ('Micompa', 'Highway 37')";

	//insert multiple records
	// var sql = "INSERT INTO customers (name, address) VALUES ?";

	// var values = [
	//     ['John', 'Highway 71'],
	//     ['Peter', 'Lowstreet 4'],
	//     ['Amy', 'Apple st 652'],
	//     ['Hannah', 'Mountain 21'],
	//     ['Michael', 'Valley 345'],
	//     ['Sandy', 'Ocean blvd 2'],
	//     ['Betty', 'Green Grass 1'],
	//     ['Richard', 'Sky st 331'],
	//     ['Susan', 'One way 98'],
	//     ['Vicky', 'Yellow Garden 2'],
	//     ['Ben', 'Park Lane 38'],
	//     ['William', 'Central st 954'],
	//     ['Chuck', 'Main Road 989'],
	//     ['Viola', 'Sideway 1633']
	// ];

	//INSERT INTO TABLE
	//con.query(sql, [values], function(err, result){
	con.query(sql, function(err, result){
		if(err) throw err;
		//console.log("1 record inserted");
		//console.log("Number of records inserted: " + result.affectedRows);

		//get inserted id
		console.log("1 record inserted, ID: " + result.insertId);
		console.log(result);
	});
});