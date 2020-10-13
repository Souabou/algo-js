const readlineSync = require("readline-sync");

let min = readlineSync.question('Minimum number: ');
let max = readlineSync.question('Maximum number: ');
let current = readlineSync.question('Current number: ');

min = Number(min);
max = Number(max);
current = Number(current);

if  ( (min < current) && (max > current) )  { 
    console.log("current between min & max") ; 
  } else {
    console.log("Game Over");
    return; 
  }

