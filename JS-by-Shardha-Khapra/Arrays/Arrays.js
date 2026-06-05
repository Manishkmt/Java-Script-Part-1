// ! Arrays:-
// ?         An array is an ordered and indexed collection of elements stored in a single variable. JavaScript arrays are dynamic, can hold values of different data types, and provide various built-in methods for performing operations such as insertion, deletion, sorting, and iteration.

// Example:-
// let marks = [90, 100, 45, 99, 78];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof(marks));
// marks[0] = 97;
// console.log(marks);



// ! Looping on an Array:-
// ?                       used to print all elements of array.
//  Example:-
// let marks = [90, 100, 45, 99, 78];

// for(let i = 0; i < marks.length; i++)
// {
//   console.log(marks[i]);
// }


// using for of loop:-

// let marks = [90, 100, 45, 99, 78];

// for(let el of marks)
// {
//   console.log(el);
// }

let cities = ["jaipur", "kuchaman", "sikar", "jhunjhunu"];

for(let city of cities){
  console.log(city.toUpperCase());
}