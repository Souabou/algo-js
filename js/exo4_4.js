const readlineSync = require("readline-sync");

let n = readlineSync.question('choose a number: ');
let arr = [];
let sum = 0;


function rand10() {
    return parseInt(Math.random()*11);
}
function multiRand(n) {
    arr = [];
    for (let i = 0; i < n; i++) {
        let x = rand10();
        arr[i] = x;
    }
    return  arr;
}

function average(arr) {
    let b = arr.length;    
    for (let i = 0; i < b; i++){
      sum = sum + arr[i];
    }
    return sum/b;
  }
  
function min(arr) {
    return Math.min(...arr);
  }

function max(arr) {
    return Math.max(...arr);
  }

console.log(multiRand(n));
console.log("moyenne number is " + average(arr));
console.log("min number is " + min(arr));
console.log("max number is " + max(arr));