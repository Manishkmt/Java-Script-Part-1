// ! For a given array with marks of students-> [85.97,44,37,76,60]  find the avarage of the entire class.

let studentMarks = [85,97,44,37,76,60];
let sum = 0;

// for(let i = 0; i < studentMarks.length; i++){
//   sum = sum + studentMarks[i];
// }

// console.log("Avarage of marks =", sum/2);


//  Method 2:-

for(let val of studentMarks){
  sum += val;

}
let avg = sum/studentMarks.length;
console.log(`avg of students ${avg}`);