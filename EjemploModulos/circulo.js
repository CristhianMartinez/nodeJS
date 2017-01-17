//Modulo 2: Fichero con libreria circulo.js
//    -> exporta las propiedades y metodos de las variable global exports

var PI = Math.PI; //Variable privada del modulo, no es visible en el exterior del modulo

exports.area = function(r){return PI * r * r}; //metodo de la interfaz
exports.circunferencia = function(r){return 2 * PI * r} //metodo de la interfaz