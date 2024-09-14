// A JavaScript function that takes an input:
function getMilk(bottles){
    var cost = bottles * 1.5;
}

// Calling a function that requires an input:
getMilk(2);

// Challenge solution:
function buyMilk(money){
    var milkCost = 1.5;
    var totalBottles = Math.floor(money/milkCost);
    var change = money % milkCost;
    console.log("The robot can buy: " + totalBottles + " bottles of milk from the store.");
    console.log("You'll be getting: R" + change + " in change back from the robot.");
}

buyMilk(15);