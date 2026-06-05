// ! For a given array with prices of 5 items-> [250,645,300,900,50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.


let prices = [250,645,300,900,50];
let i = 0;
for(let value of prices){
   console.log(`value at index ${i} = `, value);
   let offer = value/10;
   prices[i] = prices[i] - offer;

   i++;
}
console.log(prices);