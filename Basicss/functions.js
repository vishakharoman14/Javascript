// //Functions
// .Function Declaration, Expression and arrow functions
// Parameters vs arguments
// Default , rest  and spread parameters 
// return values and early returns 
// First -class function (assign to variables, pass as arguments, return from other functions)
// Higher -order functions 
// pure vs impure functions 
// closures and lexical scopping 
// IIFE (Immediately Invoked Functions Expressions)
// Hoisting differences between declaration and expression 

// what function 

//agar code likh diya to wo turant chal jata haii 
// console.log("Hey")

//
// function dance(){
//     console.log("dance");
// }

//1] Normal Function / Function Declaration //function statement
function first(){
}
first();

//Function Expressions
let fun = function(){
}
fun();

//Fat arroe function 
let arrfunc= ()=>{
console.log("Arrow Function")
}

//Parameters & Arguments
function dance(user){//parameters
    console.log(`${user} dance `)
}

// dance("Vishakha");
// dance("Vaibhav");//arguments


function add (v1, v2){//parameters
    console.log(v1+v2)
}

// add(1,2);//arguments

//Default , Rest And spread parameters

//Default  parameters
function add(v1=10, v2=20){//default value
  console.log(v1+v2)
}
// add();
// if we try to add undefined + undefined we will get NaN

//jab argumnets kai sare ho to hame utne hi parameters nbanan epadenge isse 
// bachane ke liye ham rest ka use karte hai (...)
// agar (...) function ke parameter space mein lage to  wo (rest operator hai )
//and agar wo arrays & objects mein lage to wo spread operator hai 

function abcd(...val){ //rest parameter 
console.log(val);
}
// abcd(1,2,3,4,5,6,7,8,9);

