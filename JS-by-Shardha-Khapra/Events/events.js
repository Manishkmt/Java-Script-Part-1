// ! Events in JS:-
// ?                Thhe change in the state of an object is known as ann event. Events are fired to notify code of "interesting changes" thhat may affect code execuution.

//  Example:-

//  ouuuse events click, double click etc.


// ! Events handling in js:-
// ?     node.event = ()=>{
  // handle here
  // ?      }

  // let btn_1 = document.querySelector("btn1");

  // btn1.onclick = (evt) => {
  //   console.log(evt);
  //   console.log(evt.type);
  //   console.log(evt.target);
  //   console.log("btn1 was clicked");
  //   let a = 25;
  //   a++;
  //   console.log(a);
  // }

  // let box1 = document.querySelector("div");

  // box1.onmouseover = () => {
  //   console.log("You are inside the div");
  // };


  // ! Event Object:-
  // ?               It is a special object that has details about the event.

  // ? All event handlers have access to the Evennt Objject's properties annd mmethhhods.

  // example:-
  // node.event = (e) => {
  // handle here
  // }

  //  let btn_1 = document.querySelector("btn1");

  // btn1.onclick = (evt) => {
  //   console.log(evt);
  //   console.log(evt.type);
  //   console.log(evt.target);
  //   console.log("btn1 was clicked");
  //   let a = 25;
  //   a++;
  //   console.log(a);
  // }



  // ! Event Listeners:-
// ?   node.addEventListener(event, callback);

// ?   node.removeEventListener(event, callback);

  // todo   Note:-
  // ?            The callback reference should be same to remove


  let btn_1 = document.querySelector("btn1");
  btn1.addEventListener("click", (evt) => {
    console.log("Button was clicked - handler 1");
     
  });

   btn1.addEventListener("click", (evt) => {
    console.log("Button was clicked -  handler 2");
     
  });



  const handler3 = () => {
     console.log("Button was clicked  - handler 3");
  }
  btn1.removeEventListener("click",handler3);
 
 

  