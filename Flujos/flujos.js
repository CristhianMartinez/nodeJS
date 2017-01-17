//arranca stream
process.stdin.resume();

//configura entrada ASCII (sino buffer binario)
process.stdin.setEncoding('ascii');

//Manejar de evento 'data'
// -> bucle de lectura de lineas
process.stdin.on('data', function(line){
	//process.stdout.write(line);
	console.log(line);
});