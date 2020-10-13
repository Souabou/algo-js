const readlineSync = require("readline-sync");

let a =  readlineSync.question('lenght of rectangle: ');
let b =  readlineSync.question('width of rectangle: ');

function calcSurface (a, b) {
    return a * b;
}
console.log(calcSurface (a, b));


