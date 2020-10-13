const readlineSync = require("readline-sync");

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
}
console.log(sum);



