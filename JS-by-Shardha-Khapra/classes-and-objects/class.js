// ! Prototypes in js:
// ?                      // A js object is an entity having state and behavior (properties and method). JS object have a special property called prototype.. 

// /Example:
// const student = {
//   fullName : "Manish Kumawat",
//   marks : 95.20,

//   printMarks : function() {
//     console.log("Marks = ",this. marks);
//   }
// }

// * We can set prototype using __proto__

// Example:-

// const employee ={
//   calcTax() {
//     console.log("Tax rate is 10 %");
//   }
// };

// const manish ={
//   salary : 50000,
//   calcTax() {
//     console.log("Tax rate is 20%");
//   },

// };

// manish.__proto__ = employee;
   

// ! Classes in JS:-
// ?                 Class is aprogram-code template for creating objects.
// ? Those objects will have some state (variables) & some behaviour (functions) inside it.

// Examole:-
// class car{
//   start(){
//     console.log("Start");
//   }

//   stop(){
//     console.log("Stop");
//   }

//   setBrand(brand){
//     this.brandName = brand;
//   }
// }

// let car1 = new car();
// car1.setBrand("Siyara");


// ! Constructor:-
// ?              Constructor() method is:-  automatically invoked by new, initializes object

// Example:-

class car{

  constructor(){
    console.log("Creating new object");
  }
  start(){
    console.log("Start");
  }

  stop(){
    console.log("Stop");
  }

  setBrand(brand){
    this.brandName = brand;
  }
}

let car1 = new car();
car1.setBrand("Siyara");
