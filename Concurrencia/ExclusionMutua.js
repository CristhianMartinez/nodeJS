var tiempo = 5000; //variable compartida

setInterval(function(){
	tiempo = tiempo -1000;
	console.log("A consume 1000");
	if(tiempo <1 ){process.exit();}
}, 1000);

setInterval(function(){
	tiempo = tiempo -1000;
	console.log("B consume 1000");
	if(tiempo <1 ){process.exit();}
}, 1000);