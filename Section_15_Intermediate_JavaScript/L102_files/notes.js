// Adding a combined conditional if statement to the outputs.
var userName = window.prompt("Enter your name: ");
var crushName = window.prompt("Now enter your crushes name: ");
var n = Math.random();
n *= 101;
n = Math.floor(n);
if (n > 70) {
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%. You love eachother like Kanye loves Kanye");
} 
if (n > 30 && n <= 70){
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%.");
} else {
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%. You go together like oil and water");
}
