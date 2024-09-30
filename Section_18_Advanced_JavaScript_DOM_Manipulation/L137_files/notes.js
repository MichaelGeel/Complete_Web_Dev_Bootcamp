// Adding an event listener to $0, which is bound to an h1:
$0.addEventListener("click", function(){
    console.log("I got clicked");
});

// Creating a simple function:
function calculator(num1, num2) {
    return num1 + num2;
}

// Calling above function:
calculator(2, 3); //output 5

// Manually needing to change the function:
function calculator(num1, num2){
    return num1 * num2;
}

// Creating add and multiply functions:
function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

// Creating a function that takes one of the above functions as an input:
function calculator(num1, num2, operator){
    return operator(num1, num2);
}

// Calling this function:
calculator(4, 5, add);

// Lesson Challenge remaining functions:
function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 / num2;
}
// Simply add these before the calculator function and calculator function calls for them to be available.