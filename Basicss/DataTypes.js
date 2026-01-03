//Data Types.

//Primitives Data Types -> aise sari values jinko copy karne par tumne ek real copy mil jaye 

// (string, number , boolean, null , undefined , symbol, bigint)
//  let a= 12;
//  let b = a;

//  a = a+2;

//Reference -> inko copy karne par real copy nahi milegi par apo reference milega parent ka
// ( Arrays, Objects, Functions)
// [] {} ()

// let c =[1,2,3];
// let d=c;
// d.push(2);
// console.log(d);
// console.log(c);


//Strings
// ''-Single Quotes
// ""-double Quotes
// ``-back ticks

//Number
//12 - integer
//12.3- number

//booleans - true & false 
// let a = true 
// let b= false ;

//Null - ka matlab hai apne janbujkar koi value nahi di 
// let selectedStudents = null;

//undefined- ka matlab ki apne variable banaya and use value nahi di 
// let a; --> undefined

//symbol --> unique immutable value create karta hai 
// future main hum koi labraries use karenge ab is case mein un libraries mein kai bar kuchh feilds hoti
//hai jinse similar hum bhi bana lete hai aur galti se humaari banaai hui fields 
// us library ki original feilds change kar dete haii 
//  let u1= symbol ("uid");
//  let u2= symbol ("uid");

// let visharkhaa ={
//     uid:12,
//     model:"vish"
// }

// visharkhaa.uid = 1;

let obj={
    uid:1,
    name:"vishu",
    age:12,
    email:"vish@gmail.com"
};

let u1 = Symbol("uuid");
obj[u1]="001";


//bigInt
// let a= Number.MAX_SAFE_INTEGER;
// a+2

// let b = 9007199254749901n;
// b=b+3n;



//Reference Values // Non-premitive values

// let a=[1,2,3];
// let b=a;


//Dynamic Typing --> js main static typing nahi hai and yaha par hai dynamic typing 
//jiska matlab haii app data ko change kar sakte ho Q ki yaha par dynamic data types hai 

// let a= 12;
// a=true;
// a="vishakhSa";
// a=[];
// a=nulla=undefined

//typeof quirks (e.g., typeof null === 'object)

typeof(a);
// typeof null ---> object 
// typeof NaN ---> Number


// Type coercion ( == vs ===)
//concept jismain apka 1 type automatically convert hojayega
//
// "5" + 1 --> 51
// "5" - 1 --> 4

//Truthy vs falsy values
 //0 false " " null undefined NaN documnet.all -- false
 //rest all --> true

// !!0-- trick


//Practice Session 
//predict the result : 
// true + false => 1
// , null + 1 -> 1
//5+ "5"-> 55
//!!undefined- false

// Why Nan -> type of NaN jabbhi app NaN faild operation hai in js
// typeof NaN === 'number' //true


 





