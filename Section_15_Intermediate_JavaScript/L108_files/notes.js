// While loop syntax:
while (condition == true) {
    // Code to execute;
}

// Example implementation:
var i = 1;
while (i<2){
    console.log(i);
    i++;
}

// FizzBuzz function with a while loop implemented:

var output = [];
var count = 1;

function fizzbuzz(){

    while(count<100){
        if (count % 3 === 0){
            if (count % 5 === 0) {
                output.push("FizzBuzz");
            } else {
                output.push("Fizz");
            }
        } else {
            if (count % 5 === 0) {
                output.push("Buzz");
            } else {
                output.push(count);
            }
        }
        count++;
    }
    console.log(output);
}

// Lesson Challenge 99 Bottle song:
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