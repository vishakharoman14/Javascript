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

//Return values and early return 
// return matlb jaha se aaye ho wahi daal denge
function abcd(){
    return 12;
}
let val = abcd();  // 12
// console.log(val);


//First class functions (assign to variables , pass as arguments, return from other function )
//functions ko values ki tarah treate kar sakte hai 

function vish(val){
//   val();
}
vish(function(){
    console.log("hey");
})

//Higher Order Functions -> aise function jo ki return ho 
// return kare 1 function ya fir accept kare 1 function apne parameter main 

function hoc(val){// Higher order function 
 return function (){
    console.log("Returned function") // still HOC 
 }
}

hoc(function(){
    console.log("HOC")
})

//Pure Vs Impure Functions 
// .bind. aisa function jo ki bahar ki value se answer na badle
//  ya bahar ki value ko na badle  wo hai pure function 

let a =12;
function math(){
    console.log("Pure Function ")
}
//Impure Function 
// aisa function jo bahar ki value ko badal de wo hai impure function

function Impure(){
    a++
}

//Closures and lexical scopping

//Closures--> ek function jo return kare 1 ur function return hone wala function hamesha use karega parent function ka variable 

function clo(){
    let a=10;
    return function(){
     console.log(a);
    }
}

//Lexical Scopping 

function clo(){
    let a=10;
    return function(){
     let b=20;
            return function (){
                let c=20;
            
            }
       }
}

//IIFE(Immediately Invoked Function Expressions )
(function(){
//  console.log("IIFE")
})();

//Hoisting Differences between declaration and expression 

//Declaration 
// abcd();


function abcd(){
    // console.log("Hoisting ")
}


//Expression (will not host  )
// va();

let va= function(){
    console.log("Hoisting will not work  ")
}


// +++++++++++Practice Session++++++

// Q1. What's the difference betwwen function declaration 
//and expression in terms of hoisting
