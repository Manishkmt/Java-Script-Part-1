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

// let cities = ["jaipur", "kuchaman", "sikar", "jhunjhunu"];

// for(let city of cities){
//   console.log(city.toUpperCase());
// }


// ! Array methods:-
// ? 1. Push():-    add to end.

//  Example:-
// let foodItems = ["Mango", "Onion", "Apple", "pizza"];
// console.log(foodItems);

// foodItems.push("Pineapple");
// console.log(foodItems);


// ? 2. Pop():-  delete from end & return.


// let foodItems = ["Mango", "Onion", "Apple", "pizza"];
// console.log(foodItems);

// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log(deletedItem);



// ? 3. toString():-  converts array to string

// let foodItems = ["Mango", "Onion", "Apple", "pizza"];
// let marks = [87, 98, 69, 100, 89];
// marks.toString();


// console.log(foodItems);

// foodItems.toString();
// console.log(foodItems.toString());
// console.log(marks.toString());


// ?4. Concat():- joins multiple arrays & return result

//  Example:-
// let marks1 = [98, 97, 78,56, 45, 67];
// let marks2 = [90, 76, 34, 56, 70];
// let marks = marks1.concat(marks2);
// console.log(marks);


// ? 5. unshift():- add to start

// let foodItems = ["Mango", "Onion", "Apple", "pizza"];
// foodItems.unshift("Burger");
// console.log(foodItems);

// ? 6. shift():- delete from start & return

// let foodItems = ["Mango", "Onion", "Apple", "pizza"];
// foodItems.shift();
// console.log(foodItems);

// ? 7. slice():- returns a piece of array. Don't change in origional array.

// slice(startindex, end index)
// let foodItems = ["Mango", "Onion", "Apple", "pizza"];
// console.log(foodItems);
// console.log(foodItems.slice(1,3));




// ? 8. splice():- change origional array(add, remove, replace)

// Splice(startindex, delCount, newel)

let foodItems = ["Mango", "Onion", "Apple", "pizza"];
console.log(foodItems);
console.log(foodItems.splice(1,1,"Guava","Icecream"));

console.log(foodItems.splice(1, 0 ,"Icecream"));