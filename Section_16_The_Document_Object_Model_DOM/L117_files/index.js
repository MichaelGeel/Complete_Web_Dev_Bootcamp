// Getting all elements by tag name:
document.getElementsByTagName("li");

// Selecting an element from the returned array of getElements and manipulating it:
document.getElementsByTagName("li")[2].style.color = "purple";

// Finding out how many li elements are in the web page using the .length:
document.getElementsByTagName("li").length;

// Finding all elements by Class Name:
document.getElementsByClassName("item");

// Finding AN element by ID:
document.getElementById("title");

// Editing the innerHTML of an element using ID selection:
document.getElementById("title").innerHTML = "Good Bye";

// Using querySelector to find a single item using combined selectors:
document.querySelector("li.item > a");

// Using querySelectorAll to find all elements that satisfy a given selector:
document.querySelectorAll("li.item");

// Lesson challenge solution (mine):
document.querySelector("li.item > a").style.color = "red";