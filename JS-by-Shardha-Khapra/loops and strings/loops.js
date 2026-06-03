// ! Loops:-
// .        Loops are used to execute a piece of code again & again.


// ! Types of loops:-
// ? 1. for loop:-
// * Example:-

// for(let i = 1; i <= 5; i++){
//   console.log("Manish Kumawat");
// }

//! Sum of first n numbers

// let num = 10;
// let sum = 0;
// for(let i = 1; i <= num; i++){
//   sum += i;
// }
// console.log(sum);

// ! Infinite loop :-
//                    A loop yhat never ends.


// ? 2. while loop:-
// * Example:-
//  while(condition){
//     do something here
// }

// let i = 1;
// while(i <= 5){
//   console.log(i);
//   i++
// }

// ? 3. do while loop:- run loop at least once and depand on condition.
// * Example:-
    //  do{
    //   // do something here
    //  }while(condition);


// let i = 1;
// do{
//   console.log(i);
//   i++
// }while(i <= 10);

// ? 4. for-of loop:-
// *                  The for...of loop is used to iterate over the values of iterable objects such as:array, string, map, set 


// *  for(let value of strvar){
        // do some work
        //}

//  Example:-

// let str = "Manish Kumawat";
// let size = 0;
// for(let i of str){
//   console.log(i);
//   size++
// }

// console.log("string size = ", size);


// ? 5. for-in loop:-
//                    The for...in loop is used to iterate over the keys (property names) of an object.

//It can also be used with arrays, but it returns the indexes, not the values.

// Syntax:- for(let key in objVar){
//  Do some work
// }


// Example:-

let student = {
  name : "Manish Kuamwat",
  age : 20,
  cgpa : 9,
  isPass : true
};

for(let i in student){
  console.log(i);

  console.log("key=", i, "value= ", student[i]);
}






