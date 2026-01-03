//controlFlow.js 

// Teach if, else if , else switch-case, early return pattern

// if else
if(condition => t || f){
    //true
}else{
    //false
}

// else if 
if(loggedin && admin){

}else if(loggedin){

}else{

}

// switch case 
switch(1){
    case 1: 
       break;
    case 2: 
       break;
    case 3: 
       console.log("hhhehehhe i started js hehehhheh")
       break;
    case 4: 
       break;
    case 5: 
       break;
    default:
}

//early return pattern 
// function getVal(val){
//     if(val<100) return "A"
//     else if(val<80) return "B";
//     else if(val<50) return "c";
//     else return 'D'
// }
function getVal(val){
    if(val<25) return "D"
    else if(val<50) return "C";
    else if(val<75) return "B";
    else return 'A'
}
getVal(42);


//Practice Session 
// Write a function getGrade(score) that :
//     Takes a student's marks ( 0 t0 100)
//     returns the grade based on this logic:
//  90-100 A+
//  80-89 A
//  70-79 B
//  60-69 C|
//  33-59 D 
//  0-32 Fail 
//  Anything else  Invalid marks   


function getGrade(score){
    if(score <0 || score > 100) return "Invalid Marks"
    if(score <=32) return "Fail"
    if(score <=59) return "D"
    if(score <=69) return "C"
    if(score <=79) return "B"
    if(score <=89) return "A"
    return "A+"
}
console.log(getGrade(67))

//Rock Paper-csissors logic 

function rps(user, computer){
if (user === computer) return "Draw";
if (user === "rock" && computer === "scissor") return "user";
if (user === "scissor" && computer === "paper") return "user";
if (user === "paper" && computer === "rock") return "user";
return "computer"
}

console.log(rps("rock", "rock"));



