var fs = require('fs');
var rs = fs.createReadStream('./myrenamedfile.txt');
rs.on('open', function(){
	console.log('the file is open');
})