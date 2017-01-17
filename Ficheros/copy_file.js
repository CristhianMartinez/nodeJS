var fs = require("fs");   //Importa modulo file system

if(process.argv.length != 4){ //parametros mal?
	console.log("Syntax: node copy_file <orig> <dest>");
	process.exit(); //finaliza proceso node
}

fs.readFile(
	process.argv[2], //fichero <orig>
	function(err, data){ //callback de finalizacion
		fs.writeFile( //appendFile
			process.argv[3],  //fichero <dest>
			data,  //Contenido de <orig>
			function(err){ //callback de finalizacion
				if(err) throw err; 
				console.log('file copied');
			}
		);
	}
);