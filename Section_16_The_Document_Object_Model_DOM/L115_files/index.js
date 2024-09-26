// Displays the document object for the html file:
document;

// Displays the first element child of the document object (which is the html element):
document.firstElementChild;

// Displaying the firstElement child of the html object (the head):
document.firstElementChild.firstElementChild;

// Displaying the last element child of the html object (the body):
document.firstElementChild.lastElementChild;

// Getting to the h1 inside the body:
document.firstElementChild.lastElementChild.firstElementChild;

// Saving a DOM object to a variable:
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// Changing the text of the h1 using the above variable:
heading.innerHTML = "Good Bye";

// Changing the font colour of the heading using the variable:
heading.style.color = "red";

// Selecting an input and having it simulate a mouse click on that input.
document.querySelector("input").click();

// Lesson Challenge solution (mine):
document.querySelector("ul").lastElementChild.innerHTML = "Michael Geel";