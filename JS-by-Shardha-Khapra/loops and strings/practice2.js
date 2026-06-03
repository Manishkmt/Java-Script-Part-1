// ! Create a game where you start with any random game number. Ask the uset to keep guessing the game number until the user enters correct value.

let gameNum = 25;

let userNum = prompt("Guess the game number:");
console.log(userNum);

while(userNum != gameNum){
  userNum = prompt("You enter wrong number. Guess again the game number:");

}

console.log("Congratulations, you enter the right num.");


