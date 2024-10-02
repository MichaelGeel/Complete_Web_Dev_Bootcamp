// code for a keypress event listener:
document.addEventListener("keydown", function(){
    window.alert("A key was pressed");
});

// Printing the event parameter that triggered the listener:
document.addEventListener("keydown", function(event){
    console.log(event);
});

// Accessing the key that triggered the event:
document.addEventListener("keydown", function(event){
    console.log(event.key);
});

