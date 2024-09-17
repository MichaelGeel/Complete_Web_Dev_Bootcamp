// Creating an array of items:
var arrayItems = [item, item, item, item];

// Fetching an item from an array:
var arrItem1 = arrayItems[0];

// Accessing the number of items/length of the array:
var arrLength = arrayItems.length;

// Checking for an item within an array:
var itemExists = arrayItems.includes(item2);

// Lesson Challenge:
var guestList = ["Bob", "Jill", "Mikey", "Julia", "H", "Keagan"];
var guestName = window.prompt("Hello, what is your name?");

if (guestList.includes(guestName)){
    window.alert("Welcome in, Enjoy the party!");
} else {
    window.alert("Bugger off, you aren't invited.");
}