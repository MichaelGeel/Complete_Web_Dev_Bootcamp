// Lesson 85 Challenge solution:
var userName = window.prompt("What is your name?");
userName = userName.slice(0,1).toUpperCase() + userName.slice(1).toLowerCase();
window.alert("Hello, " + userName);

// Using .length to get the rest of the userName for the .lower:
var userName = window.prompt("What is your name?");
userName = userName.slice(0,1).toUpperCase() + userName.slice(1, userName.length).toLowerCase();
window.alert("Hello, " + userName);