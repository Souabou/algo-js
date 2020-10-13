const readlineSync = require("readline-sync");

let dateArray = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let nb = readlineSync.question("Enter a number between 1 and 7: ");

if ( nb >= 1 && nb <=7 ) {
    console.log(dateArray[nb+1]);
}




