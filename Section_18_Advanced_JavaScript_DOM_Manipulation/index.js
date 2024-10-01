// function handleClick(){
//     window.alert("A button was clicked.");
// }

// document.querySelector("button").addEventListener("click", handleClick);

// Re-writing the above as an anonymous function:
// document.querySelector("button").addEventListener("click", function() {
//     window.alert("A button was clicked.");
// });

// Lesson 137 Challenge: Adding an event listener efficiently to each button:
for(var i = 0; i < document.querySelectorAll("button").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        // var audio = new Audio("./assets/sounds/tom-1.mp3");
        // audio.play();
        // console.log(this);
        // this.style.color = 'white';
        var buttonText = this.textContent;
        switch(buttonText){
            case "W":
                var crash = new Audio("./assets/sounds/crash.mp3");
                crash.play();
                break;
            case "A":
                var kick = new Audio("./assets/sounds/kick.mp3");
                kick.play();
                break;
            case "S":
                var snare = new Audio("./assets/sounds/snare.mp3");
                snare.play();
                break;
            case "D":
                var tom1 = new Audio("./assets/sounds/tom1.mp3");
                tom1.play();
                break;
            case "J":
                var tom2 = new Audio("./assets/sounds/tom2.mp3");
                tom2.play();
                break;
            case "K":
                var tom3 = new Audio("./assets/sounds/tom3.mp3");
                tom3.play();
                break;
            case "L":
                var tom4 = new Audio("./assets/sounds/tom4.mp3");
                tom4.play();
                break;
            default: console.log(buttonText);
        }
    });
}

