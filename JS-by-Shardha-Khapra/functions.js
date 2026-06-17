// ! functions:-
// ?            It is the block of code that performs a specific task, can be revoked whenever needed. It reduce redundency in the code.

// syntax:-

// ? Function definition:-
// 1. function functionName(){
// do some work
// }

// ? function call:
//  functionName();

// another method:-

// function functionName(parameter1,paramenter2, .....){
//   do some work here
// }

// function myFunction(){
//   console.log("Manish Kumawat");
// }

// myFunction();

// myFunction();



// function myFunction(msg){ // parameter ->input
//   console.log(msg);

// }

// myFunction("Manish Kumawat"); // argument


// function sum(a, b){
//  console.log("sum of", a, "and", b, "is:", a + b);
// }

// sum(4, 5);


// function sum(a, b){
  // here a and b or function parameters act as a local variables of sum function.

//   s = a + b;
//  return s;
// }

// let val = sum(4,5);
// console.log(val);
// sum(4, 5);


// ! Arrow functions:-
// ?                   Compact way of writing a function.

// const functionName = (parm1,parm2,...)=>{
  // do some work
  // }

  // Example:-

  function sum(a, b){
    return a + b;
  }
const arrowSum = (a, b) => {
  return a * b;
};

