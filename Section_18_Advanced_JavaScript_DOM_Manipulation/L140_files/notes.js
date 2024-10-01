// Skeleton code for a switch statement:
switch (expression) {
    case expression:

        break;
    default:

}

// Looking at the fleshed out switch statement:
switch(buttonText){
    case "W":
        var crash = new Audio("./assets/sounds/crash.mp3");
        crash.play();
        break;
    case "S":
        var kick = new Audio("./assets/sounds/kick.mp3");
        kick.play();
        break;
    default: console.log(this.textContent);
}