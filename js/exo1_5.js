const readlineSync = require("readline-sync");

let nb1 = readlineSync.question('Write a number with decimal: ');
let nb2 = readlineSync.question('Write a second number with decimal: ');

console.log((Math.trunc(nb1)) * nb2 );


