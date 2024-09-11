// CTRL + / to quick comment lines.

var myName = "Michael";
var myNameSlice = myName.slice(0,3);
window.alert(myNameSlice);

// From a position in the string to the end:
var myName = "Michael";
var myNameSlice = myName.slice(5);
window.alert(myNameSlice);

// Challenge solution:
var userText = window.prompt("Enter your text: ");
var char280 = userText.slice(0, 280);
window.alert(char280);

// Compressed challenge solution:
window.alert(window.prompt("Enter your text: ").slice(0, 280));