const readlineSync = require("readline-sync");

// pair avec for
for (let i = 1; i <= 50; i++) {
     if (i % 2 == 0 ) {
         console.log(i);   
     } 
 }

// pair avec while

let i = 1;

while (i <= 100) {
    if (i % 2 == 0 ) {
        console.log(i);   
    } 
    i++;
}
