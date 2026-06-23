// ! Create a new button element. Give it a text "Click me", background color of red & text color of white.

let newbtn = document.createElement("button");

newbtn.innerText = "Click Me";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);


let btn = document.createElement("button");
btn.innerText = "Click Me";

document.body.appendChild(btn);