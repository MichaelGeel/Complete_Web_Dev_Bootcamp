// For loop example and syntax:
for (var i=1; i<2; i++){
    //code to execute;
}

// Rewriting the fizzbuzz function to use a for loop:
var output = [];

function fizzbuzz(){

    for (count=1; count<=100; count++){
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
    }
    
    console.log(output);
}