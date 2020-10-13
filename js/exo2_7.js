const readlineSync = require("readline-sync");

let n = Number (readlineSync.question("Enter a number : "));
let i = 1;
let sum = 0;

while (i <= n) {
  let x = Number (readlineSync.question("Enter a number : "));
  sum += x;
  i += 1;
}
console.log('sum of all the numbers collected: ', sum);


// argument pour que la boucle continue le nombre de fois a reposer la question jusqu a ce qu'il arrive a nombre n ( tant que le i sera inferieur que n il va rajouter 1)