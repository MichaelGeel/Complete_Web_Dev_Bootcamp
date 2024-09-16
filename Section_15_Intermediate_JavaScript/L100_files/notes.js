// Conditional if/else block example:
if (track === "clear"){goStraight();}
else {turnRight();}

// Above code in the more common structure:
if (track === "clear"){
    goStraight();
} else {
    turnRight();
}

// Love calculator with if/else:
var userName = window.prompt("Enter your name: ");
var crushName = window.prompt("Now enter your crushes name: ");
var n = Math.random();
n *= 101;
n = Math.floor(n);
if (n > 70) {
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%. You love eachother like Kanye loves Kanye");
} else {
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%.");
}