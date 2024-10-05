// Changed the h1 color to red:
// $("h1").css("color", "red");

// Checking if the jQuery library is loaded and ready before executing a callback function containing the code to run:
// $(document).ready(function(){
//     $("h1#header").css("color", "red");
// });

// Adding a class to an element using jQuery:
$("h1").addClass("big-title");

// Removing a class from an element:
$("h1").removeClass("big-title");

// Adding multiple classes to an element:
$("h1").addClass("big-title margin-50");

// Removing multiple classes from an element:
$("h1").removeClass("big-title margin-50");

// Checking for a class on an elemetn:
$("h1").hasClass("margin-50"); // returns a boolean true/false

// Method 1 of changing text in an HTML element (text-only):
$("h1").text("Good Bye");

// Method 2 of changing text in an HTML elemetn (text and HTML editable):
$("h1").html("<em>Hello Again</em>");

// Getting the value of the src attribute of an img element:
$("img").attr("src");

// Setting the valu of the src attribute of an img element:
$("img").attr("src", "./assets/images/image2.png");

// Adding a click event listener to the h1 element:
$("h1").click(function() {
    $("h1").css("color", "purple");
});

// Adding a click event to all elements matching a selector using jQuery:
$("button").click(function() {
    $("h1").css("color", "purple");
});

// Adding a keypress event listener and passing the event to the function:
$("input").keypress(function(event) {
    console.log(event.key);
});

// The 2 ways of adding a keypress event listener to the body:
$(document).keypress(function(event) {
    console.log(event.key);
});
$("body").keypress(function(event) {
    console.log(event.key);
});

// Lesson 156 Challenge:
$(document).keypress(function(event) {
    $("h1").text(event.key);
});

// Using the .on method to add an event listener to an element/s:
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});

