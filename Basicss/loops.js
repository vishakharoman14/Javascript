//for, while, do-while
// break, continue
// for-Off, forEach for arrays,
// for-in, Object={.enties for objects }
//repeat karne ko loop kahte hai 

//for  while foreach
//kahase jana hai kaha tak jana hai --> kaise jana hai //for 
//kaha se jana hai -> kab rukna hai -> kaise jana hai // while

//for
// 1-100 

// for( start; end; change){
// }

// for ( i = 1; i<=100; i++){
//     console.log(i);
// }

//while
// start
//  while (end){
// //code 
// change
//  }

// let i = 1;
// while (i<=32){
//  console.log(i)
//  i++;
// }

// do-while

// do{

// }
// while(end)

// let i = 1;
// do{
//     console.log(i);
//     i++
// }while(i<=20)

//break

// for(let i=1; i<200; i++){
//     console.log(i);
//     if(i === 32){
//         break;
//     }
// }


//continue
// for(let i=1; i<200; i++){
//     if(i === 32){
//         continue
//     }
//     console.log(i);
// }


//Practice Session
// Q1. Print numbers from 1 to 10 using for loop
// for( let i=1; i<=10; i++){
//     console.log(i)
// }

// Q2.Print numbers from 10 to 1 using a while loop
// let i = 10;
// while(i>=1){
// console.log(i);
//     i--;
// }

// Q3. Print even numbers from 1 to 20 using a for loop
// for(let i = 1; i<=20; i++){
// if(i%2 === 0){
//    console.log(i)
// }
// }

// Q4.Print odd numbers from 1 to 15 using a while loop
// let i = 1;
// while(i<=15){
//     if(i%2 === 1){
//         console.log(i)
//     }
//     i++
// }

// Q5.Print the multiplication table of 5 

// for (let i = 1; i<=10; i++){
//     let table = 5*i
//    console.log(table);
// }

// Q6.Find sum of numbers from 1 to 100 using loop
// sum=0;
// for (let i=1; i<=100; i++){
//     sum=sum + i
//     // console.log(sum)
// }
//   console.log(sum)

// Q7. print all the numbers between 1 to 50 that are divisible by 3
// for (let i=1; i<=50; i++){
//     if(i%3 === 0){
//       console.log(i)
//     }
// }

// Q8.Ask the user for a number and print whether each number from 1 to that number is even or odd.
// for (let i=1; i<=50; i++){
//     if(i%2 === 0){
//         console.log(`${i} is a even number`)
//     }else{
//          console.log(`${i} is a odd number`)
//     }
// }

// let user = prompt("give a number")
//  for (let i=1; i<=user; i++){
//     if(i%2 === 0){
//         console.log(`${i} is a even number`)
//     }else{
//          console.log(`${i} is a odd number`)
//     }
// }


// Q9.Count how many numbers between 1 to 100 are divisible by both 3 and 5

// for (let i=1; i<=100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i)
//     }
// }

// Q10. stop at Fisrt multiple of 7 

//write a loop from 1 to 100 that :
//      prints each numner 
//      Stops completely when it finds the first number divisible by 7

// for (let i=1; i<=100; i++){
//        console.log(i)
//     if(i%7 === 0){
//         break;
//     }
// }

// Q11. Skip Multiples of 3
//Write a loop from 1 to 20 that :
//      Skips numbers divisible by 3
//      prints all others

// for (let i=1; i<=20; i++){
    
//     if(i%3 === 0){
//         continue;
//     }
//        console.log(i)
// }

// Q12. write first 5 odd numbers only 
//write a loop from 1 to 100 that :
//      prints only 5 numbers
//      then stops the loop 
let count = 0
for (let i=1; i<=100; i++){
    if(i%2 === 1){
        count ++;
       console.log(i)
    }
    if(count === 5) break;
       
}
