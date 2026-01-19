//* ====================================
//* Values and Variable in JavaScript
//* ====================================

//* In JavaScript, values and variables are fundamental concepts that form the basis of programming.

//* Values:  A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.

//* Variables: A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.

console.log('Welcome to JS');
var myAge = 18;
console.log(myAge);

//! Let's test
// var my_firstName = "John";
//? Valid

// var _myLastName$ = "Doe";
//?  valid

// var 123myAge = 25;
//? Not valid

// var $cityName = "New York";
//? Valid

// var my@Email = "john@example.com";
//? Not valid



//! Explanation: 
//? 1. var my_firstName: This is a valid variable name. It starts with a letter, and the subsequent characters include letters, numbers and an underscore.
//?                      Follows javaScript naming rules.

//? 2. var _myLastName$ : This is a valid variable name. It starts with an underscore, and subsequent characters include, numbers, and a dollar sign. 
//?                       Follows JavaScript naming rules.

//? 3. var 123myAge : This is not a valid name. It starts with a number, which is not allowed as per JavaScript naming rules.
//?                   variables names cannot begin with a digit.

//? 4.  var $cityName : This is a valid variable name. It starts with a dollar sign, and the subsequent characters include letters.
//?                     Follows JavaScript naming rules.

//? 5. var my@Email : This is not a valid variable name. It includes the special character 'a', which is not allowed in JavaScript variable names.
//?                   Only letters, numbers, underscores, and dollar signs are allowed.
                      