// Using length to determine number of characters in a string:
var myName = "Michael Geel"; // Note that a space counts as a character.
window.alert(myName.length);

// Testing the data type output of the string.length method.
window.alert(typeof(myName.length));

// Char length challenge:
var userText = prompt("Enter your text: ");
var charLength = userText.length;
var remChars140 = 140 - charLength;
var remChars280 = 280 - charLength;

window.alert("Your text is: " + charLength + " characters long. \n"
+ "You have: " + remChars140 + "/140 chars remaining. \n"
+ "You have: " + remChars280 + "/280 chars remaining.");

// Original solution below where the 3 points were shown separately.
//window.alert("You have: " + remChars140 + "/140 chars remaining.");
//window.alert("You have: " + remChars280 + "/280 chars remaining.");


/* 
Multi-line comment mechanism.
Still commented out here.
*/