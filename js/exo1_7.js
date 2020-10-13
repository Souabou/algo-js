const readlineSync = require("readline-sync");

/* 
Multiply the shoe size by 2
Add 5 to the result
Multiply that by 50
Subtract the birth year
Add 1766
*/

let birthYear = readlineSync.question('Birth year : ');
let shoeSize = readlineSync.question('Shoe size: ');

let result = (shoeSize * 2 + 5) * 50 - birthYear + 1766; 

/* ou plus long et boring
let doubleShoeSize = shoeSize * 2;
let addShoeSize = doubleShoeSize + 5;
let multiShoeSize = addShoeSize * 50;
let subYear = multiShoeSize - birthYear;
let result =  subYear + 1766;
*/

console.log(result);
