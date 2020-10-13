const readlineSync = require("readline-sync");

let userName = readlineSync.question('Enter your first name: ');
console.log("Hello " + userName );