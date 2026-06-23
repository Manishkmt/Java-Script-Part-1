// ! Create a ,p. tage in html,  give it a class & some styling. Now create a new class in css and try to append this class to the ,p. element. Did you notice, how you overwrite the class name when you add new one? Solve this problem using classList.


let para = document.querySelector("p");

// para.setAttribute("class", "newclass");

para.classList.add("newclass");