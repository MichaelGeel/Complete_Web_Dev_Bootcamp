// Adding a combined conditional if statement to the outputs.
var userName = window.prompt("Enter your name: ");
var crushName = window.prompt("Now enter your crushes name: ");
var n = Math.random();
n *= 101;
n = Math.floor(n);
if (n > 70) {
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%. You love eachother like Kanye loves Kanye");
} 
if (n > 30 && n <= 70){
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%.");
} else {
    window.alert("The love score between " + userName + " and " + crushName + " is: " + n + "%. You go together like oil and water");
}

// Code Challenge after lesson 102 solution:
function bmiCalculator (weight, height) {
    var bmiValue = Math.round(weight/(Math.pow(height, 2)));
    if(bmiValue<18.5){
        var interpretation = "Your BMI is " + bmiValue + ", so you are underweight.";
    }
    else {if (bmiValue >= 18.5 && bmiValue <24.9){
            var interpretation = "Your BMI is " + bmiValue + ", so you have a normal weight.";
        } else {
            var interpretation = "Your BMI is " + bmiValue + ", so you are overweight.";
        }
    }
    return interpretation;
}