// ! Take a number n as input from user. Create an array of numbers from 1 to 10. Use the reduce method to calculate Sum of all numbers in the array. Use the reduce method to calculate product of all numbers in the array.

let n = prompt("Enter a number");

let arr = [];

for(let i = 0; i <= n; i++){
  arr[i-1] = i;
}

const sum = arr.reduce((res, curr) => {
  return res + curr;
});

const product = arr.reduce((res, curr) => {
  return res * curr;

});

console.log(sum);

console.log(product);

