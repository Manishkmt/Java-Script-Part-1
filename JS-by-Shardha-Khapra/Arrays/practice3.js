// ! Create an array to store compaies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix".  Then remove the first company from array. remove Uber & Add Ola in its replace and Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);
//delete first company
// companies.shift();
// console.log(companies);

// remove uber and replace with ola
companies.splice(2, 1, "Ola");
console.log(companies);


companies.push("Amazon");
console.log(companies);