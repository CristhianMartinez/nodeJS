// //Manejador del evento: uncaughtException
// process.on('uncaughtException', function(err){

// 	console.log("PROGRAMA ABORTADO: ERROR \n -> " + err);
// })

// console.log("Este mensaje saldrá por consola");

// funcionIndefinida(); //Funcion indefinida -> Error

// console.log("Este mensaje NO saldrá por consola");

//Usar try - catch

console.log("Este mensaje saldrá por consola");
try{
	//throw("MI EXCEPTION");
	//funcionIndefinida();
	throw new Error("my error");
}catch(err){
	console.log("ERROR CAPTURADO: ERROR \n -> " + err);
}finally{
	console.log("Hola finally");
}

console.log("Este mensaje SI saldrá por consola");