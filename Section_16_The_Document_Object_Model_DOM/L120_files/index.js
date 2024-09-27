// Changing the textContent property of a selected element:
document.querySelector("h1").textContent = "Good Bye";

// Getting the innerHTML of the ul element (returns the code for the 3 list items nested in it and their content)
document.querySelector("ul").innerHTML;

// Getting the textContent of the button element (returns only "Click Me"):
document.querySelector("button").textContent;

// Setting the innerHTML of the h1, including html tags:
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";