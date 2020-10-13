const readlineSync = require("readline-sync");

let nb1 = readlineSync.question('Write a number : ');
let nb2 = readlineSync.question('Write a second number: ');
let division = nb1 % nb2;

console.log(Math.trunc(division));


