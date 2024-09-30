// function handleClick(){
//     window.alert("A button was clicked.");
// }

// document.querySelector("button").addEventListener("click", handleClick);

// Re-writing the above as an anonymous function:
// document.querySelector("button").addEventListener("click", function() {
//     window.alert("A button was clicked.");
// });

// Lesson Challenge: Adding an event listener efficiently to each button:
for(var i = 0; i < document.querySelectorAll("button").length; i++){
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    window.alert("A button was clicked.");
});
}

