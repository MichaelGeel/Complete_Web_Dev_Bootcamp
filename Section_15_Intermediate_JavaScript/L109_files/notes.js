// My solution to 99 Bottles:
function bottles99(){
    var bottleCount = 99;

    while(bottleCount>2){
        console.log(bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer.");
        bottleCount--;
        console.log("Take one down and pass it around, " + bottleCount + " bottles of beer on the wall.");
    }
    console.log(bottleCount + " bottles of beer on the wall, " + bottleCount + " bottles of beer.");
    bottleCount--;
    console.log("Take one down and pass it around, " + bottleCount + " bottle of beer on the wall.");

    console.log(bottleCount + " bottle of beer on the wall, " + bottleCount + " bottle of beer.");
    bottleCount--;
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall");
}

// Course solution:

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}