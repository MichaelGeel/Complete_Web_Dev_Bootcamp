// My solution to the challenge:
function bmiCalculator(weight, height){
    return Math.round(weight / (height * height));
}

// My original:
function bmiCalculator(weight, height){
    return Math.round(weight / (height ** 2));
}

// Power use according to the video:
function bmiCalculator(weight, height){
    return Math.round(weight / Math.pow(height, 2))
}