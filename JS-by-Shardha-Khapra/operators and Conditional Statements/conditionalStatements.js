
//! Conditional Statements:-
// *                        use to implement some condition in the code.

// ?1. if statement:-
//                    to check a condition is true or false.

// let age = 20;
// if(age >= 18){
//   console.log("You are eligible to vote");
// } 
// if(age < 18){
//   console.log("You are not eligible to vote");
// }


// ? 2. if-else:-
//                uswe to run a condition between two.

// let mode = "light";
// let color;
// if(mode === "light"){
//   color = "white";
// }else{
//   color = " black";
// }
// console.log(color);


// ? 3. else-if:-
//               to use check multiple conditions together.

let age = 20;
if(age < 18){
  console.log("junior");
}
else if(18 < age < 40){
  console.log("younger");

}
else{
  console.log("senior");
}