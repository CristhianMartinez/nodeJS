var QS = require('querystring');

e = QS.stringify({a: 'verde', b: 'El cañaveral?'});
console.log(e);

d = QS.parse(e);
console.log(d);