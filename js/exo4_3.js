const readlineSync = require("readline-sync");

let n = readlineSync.question('choose a number: ');

function rand10() {
    return parseInt(Math.random()*11);
}
function multiRand(n) {
    let arr = [];
    for (let i = 0; i <= n; i++) {
        let x = rand10();
        arr[i] = x;
    }
    return arr;
}
console.log(multiRand(n));

