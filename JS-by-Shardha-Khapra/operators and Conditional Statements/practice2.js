// ! Wac which can give grades to students acc to their scores:

let score = prompt("Enter ypur score:");



if(score > 80 && score <= 100){
  console.log("A");
}else if(score > 70 && score <80){
  console.log("B");

}else if(score > 50 && score < 60 ){
  console.log("C");

}else if(score > 40 && score < 50){
  console.log("D");

}else{
  console.log("Fail");
}