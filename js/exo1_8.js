const readlineSync = require("readline-sync");

let name = readlineSync.question('name: ');
let favColor = readlineSync.question('Favorite color: ');
let wildAnimal = readlineSync.question('Wild animal: ');
let emo = readlineSync.question('Emotion: ');
let country = readlineSync.question('Country: ');

console.log(name + " the " + wildAnimal + " from " + country + " " + emo + " the " + favColor  + " color ");