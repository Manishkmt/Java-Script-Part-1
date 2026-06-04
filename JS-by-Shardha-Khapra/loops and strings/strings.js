// ! Strings:-
// *          String is a sequence of characters used to represent text.

// ? create string:-
//  let str = "aManish Kumawat";

// ? string length:-
//  str.length

// ? string Indices:-
//  str[0], str[1]


// ! Template Literals in js:-
// ?                          A way to have embedded expressions in strings. It is a special type of string.
//     `this is a template literl`

// let sentence = `Manish Kumawat`;
// console.log(sentence);

// ? String Interpolation:-
//                         To create strings by doing substitution of placeholders.

//    'string text${expression} string text.


// ! String method:-
// ?                 These are built-in functions to manupulate a string.

// ? str.toUpperCase():-
// *                    convert the string in upper case. 
let str = "Manish Kumawat";
console.log(str.toUpperCase());

// ? str.toLowerCase():-
// *                    convert the string in lower case. 
console.log(str.toLowerCase());

// ? str.trim():-
// *              Remove blank spaces.
let str2 = "     Mainsh Kumawat";
// console.log(str2.trim());

// ? str.slice(start, end):-
// *                         returns part of string.

// console.log(str.slice(1,7));


// ? str1.concat(str2):-
// *                     joins str2 with str1.

// console.log(str.concat(str2));


// ? str.replace(searchVal,newVal):-
// *                                 The replace() method is used to replace a part of a string with another string.

// console.log(str.replace("Manish", "Subash"));

// ? str.charAt(idx):-
// *                   find character in string at a index.

console.log(str.charAt(5));