// add, subtract, multiple and divide:
var a = 2 + 3; //5 addition
var b = 3 - 2; //1 subtraction
var c = 3 * 2; //6 multiplication
var d = 6 / 3; //2 division.

// modulo:
var e = 9 % 6; // 3

// Multi-operator operation:
var cost = 2 * 5 + 3; // First multiply then add.

// First operation inside brackets, then outside brackets, results in 16.
cost = 2 * (5 + 3); 

// Dog to Human age converter challenge:
var dogAge = window.prompt("How old is your dog?");
var humanAge = (dogAge - 2) * 4 + 21;
window.alert("Your dog is " + humanAge + " human years old.");

// Alternate solution to the above:
var dogAge = window.prompt("How old is your dog?");
window.alert("Your dog is " + ((dogAge - 2) * 4) + 21 + " human years old.");