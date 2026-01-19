//* =========================
//* Data types section-part 2
//*===========================

//* Concatentation in Javascript
//?      In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation.
//?       When the + operator is used with strings, it concatenates the strings together.

//?      It's important to note that if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well,
//?       resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.

const str ="hello " + "World";
console.log(str);


//* Type coercion is the automatic conversion of "values" from one data type to another.
//?       It is a fundamental part of JavaScript and can be used to make code more readable and efficient.


//?       There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically,
//?       while explicit coercion is done manually by the programmer.


//!       It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

// let sum = "5" - 5;
// console.log(sum);


console.log(10 + "20");
console.log(9 - "5");
console.log("Java " + "Script");
console.log(" " + " ");
console.log(" " + 0);
console.log("Manish " - "Kumawat ");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);



//!  Notes:-


//?  when we sum a string and number then final output datatype is also string.
//Example:-
let sum = " " + 0;
console.log(typeof sum);