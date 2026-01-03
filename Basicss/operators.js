//Operators
// Arithmatic , Comparison, logical, assignment , unary , ternary 

// + - * / % **
// == = ===
// < > <=  >= ! != !==
// && || 
// ? :

// Arithmatic - +,-,/,*,%,**

// 1+2 = 3 ,
// "vi"+"shu"=vishu
// Concatenation
// "5"+5=55

// 12-2=10
// 12/6=2
//12*2=24
//  mod 
// 12%2=0
//Exponensiation
// 2**3=8

// Comparison Operators - == = === < > <=  >= ! != !==
// let a=12;//Assignment operators


// = let a= 12'
// += a+=3;
// -+ a-=11;
// *= a*2;
// /= a/2;
// %= a%=3;


// Logical && || !

// && - 2no true hai to hi true ayega
// true && true = true
// true && false= false

//Unary Opeartor - single value pe apply ho 
//  + - ! typeof ++ --

// +"5" - 5
// -5= -5
// +"vishu"= NaN
// ++a-> Pre incerement 
//  a++ -> post incerement 


// ternary Operator 
//?: 
//  condition ? true hui ka code : false hui ka code 

// 12 > 13 ? console.log("true"):console.log("false"); --> false

// typeof 
// instanceof ->  will work with refernce  values only 
// let a = [];
// a instanceof Array;--> true
//  let b ={};
// b instanceof Object;-->true
// b instanceof Array;-->false

// let a = 12 
// a instanceof Number; --> false

// Practice Session 

// 1) 1st Question  --> 
// let x= 10;
// let y=20;
// if(x>5 && y< 25){
//     console.log("A");
// }else{
//     console.log("B")
// }
//Answer --> A

// 1) 2nd Question  --> 
// let isAdmin = true;
// let isLoggedIn=false;
// if(isAdmin || isLoggedIn){
//     console.log("Access granted");
// }else{
//     console.log("Access denied")
// }
//Answer -->  Access granted


// 1) 3nd Question  -->
// let temp = 35;
// if(!(temp < 30 )){
//     console.log("hot")
// } else{
//     console.log("Pleasant")
// }
//Answer -->  hot

// 1) 4th Question  -->
//  let a=0;
//  if(a){
//     console.log("Truthy");
//  }else{
//     console.log("Falsy")
//  }
 //Answer -->  Falsy

 // 1) 5th Question  -->
//  let score = 78;
//  let grade = score >= 90 ? "A" : score >=75 ? "B" : score>=60?"C":"Fail";
//  console.log(grade);
//   //Answer -->  B

 // 1) 6th Question  -->
//  let points = 120 ;
//  let status = points > 100? " Gold": points > 50 ? "Silver":"Bronze";
//  console.log(status);
 //Answer -->  Gold

//  1) 7th Question  -->
// let loggedIn = true;
// let hasToken = false;
// let access = loggedIn && hasToken ? "Allow": "Deny";
// console.log(access);
 //Answer -->  Deny

 //  1) 8th Question  -->
//  let a = 5;
//  a++;
//  console.log(a);
  //Answer -->  6

//  1) 9th Question  -->
//  let b = 7;
//  ++b;
//  console.log(b);
  //Answer -->  8
  
 // 1) 10th Question  --> 
//  let x = 3;
//  let y= x++;
//  console.log(x,y);
//Answer -->  4,3

 // 1) 11th Question  --> 
//  let p = 4;
//  let q = ++p;
//  console.log(p,q);
//Answer -->  5,5

 // 1) 12th Question  --> 
//  let m = 10;
//  console.log(m--); //Line 1
//  console.log(m);//Line2
//Answer -->  10,9

// 1) 13th Question  --> 
// let n =5;
// let result = n++ + ++n;
// console.log(result);
 //Answer -->  12

 // 1) 14th Question  --> 
//  let likes = 100;
//  function likePost(){
//     return ++likes;
//  }
//  console.log(likePost());
//  console.log(likes);
  //Answer -->  101 101

// 1) 15th Question  --> 
// let count = 5;
// if(count-- === 5){
//     console.log("Matched");
// }else{
//     console.log("Not Matched")
// }
//Answer --> Matched

