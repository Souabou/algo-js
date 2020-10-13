const readlineSync = require("readline-sync");

let age = readlineSync.question('age: ');
 
if (age >= 18) {
    console.log("you are an adult")
}
else {
    console.log('you are not an adult yet')
}

