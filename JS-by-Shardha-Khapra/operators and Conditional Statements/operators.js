
//! Operators:-
//?             Used to perform some opertion on data.

//! Types of Operators:-

//? 1. Arithmatic Operators:-
//*                          +, -, *, /, %, modulas, Exponentiation(**)
// Example:-

// let a = 5;
// let b = 2;
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);

// //?--> Exponentiation used for give power.
// console.log("a ** b =", a**b);


//? 2. Unary Operators:-
// ++, --
//Example:-
// let a = 5;
// let b = 2;

// a = a+1;
// a++;
// ++a;

// a = a -1;
// a--;
// --a;
// console.log(a);
// console.log("a + b = ", a + b);

//! Post increment:-
//a++
// console.log(a++); //Value change from next line of code

//! Pre increment:-
//++a
// console.log(++a); // value change from same line

//! Post decrement:-
// a--
// console.log(a--); // Value decrese from next line of code

//! Pre decrement:-
// --a
// console.log(--a);


//? 3. aSsignment Operators:-
//                           to assign the value.
// Example:-
//          =, +=, -=, *=, /=, **=

// let a = 50;
// let b = 10;
// a += 3;
// console.log(a);
// a -= 5;
// console.log(a);


// ? 4. Comparison operators:-
//                            used to compare two values.
//  Example:-
// Eual to(==), Equal to and typr(===), Not equal to(!=), Not equal to and type(!==), >, <, >=, <= .

// let a = 5;
// let b = 5;

// console.log(a == b);
// console.log(a != b);
// console.log(a !== b);


// ? 5. Logical operators:-
//   and(&&), or(||), not(!)   

// let a = 10;
// let b = 5;
// let cond1 = a > b;
// let cond2 = a === 10;
// console.log(cond1);
// console.log(cond1 && cond2);


// ? 5. Ternary operators:-
// Syntax:-
//         condition ? true output : false output

let age = 18;
let result = age > 18 ? "can vote" : " can't vote";
console.log(result);