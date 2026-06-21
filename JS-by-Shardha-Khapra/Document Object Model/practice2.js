// ! Create 3 divs with common class name - "box". Access them & add some unique text to each them.

let divs = document.querySelectorAll(".box");

console.log(divs);

// console.log(divs[0].innerText = "New value1");
// console.log(divs[1].innerText = "New value2");
// console.log(divs[2].innerText = "New value3");


// method 2

let idx = 1;

for (div of divs) {
  div.innerText = "new value", div[idx];
  idx++;
}
console.log(divs);