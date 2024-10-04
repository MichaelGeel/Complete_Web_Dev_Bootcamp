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

// 