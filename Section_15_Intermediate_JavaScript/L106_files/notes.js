// Adding an item to an array:
arrOutput.push(item);

// Removes and returns the last item in the array:
arrOutput.pop();

// Challenge #1 solution:
var arrOutput = [];

function FizzBuzz(){
    var lastItem = arrOutput.pop();
    var nextItem = lastItem + 1;
    arrOutput.push(lastItem);
    arrOutput.push(nextItem);
    console.log(arrOutput);
}

// Course Challenge 1 solution:
var output = [];
var count = 1;

function fizzbuzz(){
    output.push(count);
    count++;

    console.log(output);
}

// Challenge 2 solution (mine):
var output = [];
var count = 1;

function fizzbuzz(){

    if (count % 3 === 0){
        if (count % 5 === 0) {
            output.push("FizzBuzz");
        } else {
            output.push("Fizz");
        }
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;

    console.log(output);
}

// 