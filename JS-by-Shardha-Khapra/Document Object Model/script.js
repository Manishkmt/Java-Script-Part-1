// ? Selecting by id

// let heading = document.getElementById("heading");

// console.dir(heading);

// ? Selecting by class


// let headings = document.getElementsByClassName("class");
// console.dir(headings);
// console.log(headings);

// ? electing by tag

// let heading = document.getElementsByTagName("p");

// console.dir(heading);


// ? Query selector
// let firstelement = document.querySelector("p");
// console.dir(firstelement);

// let allelements = document.querySelectorAll("p");
// console.dir(allelements);



// ! Properties:-

// ? tag name:- returns tag for element node.

// console.log(firstelement.tagName);

// ? innerText:- returns the next content of element and all its children.

// console.log(firstelement.children);


// let div = document.querySelector("div");
// console.dir(div);

// console.log(firstelement.children);

// ? innerHTML :- returns the plain text or HTML contents in the element

// let div= document.querySelector("div");
// console.dir(div);



// ? textContent:- returns textual content even for hidden elements

// let div = document.querySelector("div");
// console.dir(div);


// console.dir(div.textContent = "Manish Kumawat");

// ! Attrubutes:-

// ? getAttribute(attr):- to get the attribute value.


// let div = document.createAttribute("div")
// console.dir(div);



// ? seAttribute(attr, value):- to set the attribute val


// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));



// ! style attribute:-

// node.style

// let div = document.querySelector("div");

// div.style.backgroundColor = "green";


// ! Insert elements:-

// ? to create an element:-

//  let el = document.createElement("div");


let newbtn = document.createElement("button");
newbtn.innerText = "Click Me";
console.log(newbtn);


// ? node.append(el):- adds at he end of node (inside)

// Example:-
let div = document.querySelector("div");
// div.append(newbtn);
// ? node.prepend(el):- adds athe the start of node(inside).

// Example:-

div.preppend(newbtn);
// ? node.before(el):- adds before the node (outside).

// ? node.after(el): adds after the node (outside).




