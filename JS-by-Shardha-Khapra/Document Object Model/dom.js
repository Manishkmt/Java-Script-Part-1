// ! Document Object Model:-
// ?                        DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects. It allows JavaScript to access and modify HTML elements, attributes, and styles.



// ! Window Object:-
// ?                 The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
// ? It is a global object with lots of properties & methods.


// ! What is DOM ? :-
// ?                  When a web page is loaded, the browser creates a Document Object Model of page
 
//  Document
//     |
//    HTML
//    /  \
// Head   Body
//  |      |
// Title   Div
//           / \
//         H1   P
//          |    |
//        Text  Text



// console.dir(document.body);



// ! DOM Manipulation:-

// ? Selecting wit id:-

document.getElementById("myId")

// ? Selecting with class:-

document.getElementsByClassName("myClass")


// ? Selecting with tag:-

document.getElementsByTagName("p")

// ? Query Selector:-  returns nodelist

document.querySelector("myId/ myClass/ tag")
//  returns first element

document.querySelectorAll("myId/ myClass/ tag")
//  returns a Nodelist