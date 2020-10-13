const readlineSync = require("readline-sync");

let userName = readlineSync.question('Can you give me your name please?');
console.log("Hello " + userName);

console.log("It works !!!");

// numbers 
let age = 25;

let sisterAge = age + 11;
age += 12; // age = age + 12;
console.log(age);

// string (chaine de caractère)
let phrase = "Coding is fun!";

let name = "Jean";
let nameSister = "Emma";
console.log("My name is " + name);

let userName1 = readlineSync.question("What's your name?");
console.log("He's called " + userName1);

// booleans

let isItTrue = true;
let isItFalse = false;