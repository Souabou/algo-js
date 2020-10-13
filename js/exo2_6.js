const readlineSync = require("readline-sync");


let nb = Number (readlineSync.question("Enter a number between 1 and 7: "));
if(nb==1){
    console.log("Monday");
}else if (nb==2){
    console.log("Tuesday");
}else if (nb==3){
    console.log("Wednesday");
}else if (nb==4){
    console.log("Thursday");
}else if (nb==5){
    console.log("Friday");
}else if (nb==6){
    console.log("Saturday");
}else if (nb==7){
    console.log("Sunday");
}


// ARRAY
// let dateArray = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
// let nb = Number (readlineSync.question("Enter a number between 1 and 7: "));

// if ( nb >=1 && nb <=7 ) { 
//     console.log(dateArray[nb]);
// }


// typeof