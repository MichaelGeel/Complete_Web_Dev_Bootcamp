// My solution to the fibonacci sequence:
// Naturally encased in a function the takes the input n as a number:
if (n === 1) {
    var output = [0];
}
else if (n === 2){
    var output = [0, 1];
}
else {
    n -= 2;
    var output = [0, 1];
    while (n > 0){
        var newVal = output[output.length-1] + output[output.length-2];
        output.push(newVal);
        n--;
    }
}
return output;
