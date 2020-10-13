const readlineSync = require("readline-sync");

let favnb = readlineSync.question("What's your favorite number: ");

console.log(favnb)
    while (favnb != 42) {
        console.log("Are you sure?");
        favnb = readlineSync.question("What's your favorite number: ")
    
 }
 return; 