// var, let, const - line by line comaprision
// var b;
// a=12; //its a bug in javascript which is not appriciated
// var a = 12;
// let a=12;
// let a;
// const a=12;
// const a; 

//Declarations & Initialization

// var a;  // decare karna 
// var a=12 // declare and initialize
// +++limitations/issues with var+++
// windows mein add hota hai .
//function scoped hota hai 
//firse declare kar sakte hao same name se and error nahi ayega

// var a=14;
//let is more secure  hai 
// let a;
// let a=12;
// let a=15;

//const isliye ki hame pata hai pure code main const ki valu enahi badlegi
// const a=12;


//Scopes (global , block & functional)

// var a=12// global

// function a(){
//     var a= 17;
// }


//Redeclarations & Reassignments

// var a= 12;
// a=32;//re  assign 
// var a=24//re decalaration is possible with var 

// let b=32;
// b=32;


// TDZ //utna area jitne main js ko pata hai ki variable access karta hai par access nahi de sakta 
console.log(a); // not defined 
// let a=12; //reference error  (not initialized)
var a=12;//undefined

//Hoisting impact per type
// hoisting -> ek variable ko jab js main banate hai tab wo variable 2 hisso main tut jata ha & uska declare part upar chala jata ahhi and uska init part niche rah jata hai 

var a=12;

//Commun Confusion

console.log(nm);
var nm="harsh";
// Output : undefined


console.log(age);
let age = 25;
//Output : Reference Error

var x=1;
{
    var x=2;
}
console.log(x);
//Output x=2


let a = 10;
{
    let a=20;
    console.log("Inside:", a); //20
}
console.log("Outside:", a); // 10
 // Block- Level Counter using let /const