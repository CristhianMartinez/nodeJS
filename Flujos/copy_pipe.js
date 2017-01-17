var fs = require("fs");

if(process.argv.length != 4){ //parametros mal?
	console.log("Syntax: node copy_pipe <orig> <dest>");
	process.exit(); //finaliza proceso node
}

//Abre ficheros como flujes (streams) de lectura y escritura
var readStream = fs.createReadStream(process.argv[2]);
var writeStream = fs.createWriteStream(process.argv[3]);

//Programa acaba al no haber eventos de copia
readStream.pipe(writeStream);