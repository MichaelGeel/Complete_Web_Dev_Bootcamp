// Changed the h1 color to red:
// $("h1").css("color", "red");

// Checking if the jQuery library is loaded and ready before executing a callback function containing the code to run:
$(document).ready(function(){
    $("h1#header").css("color", "red");
});