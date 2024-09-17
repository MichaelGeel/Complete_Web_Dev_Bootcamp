// My solution to the isLeapYear function:
function isLeap(year) {

        if (year%4 === 0){
            if (year%100 === 0){
                if (year%400 === 0){
                    var output = "Leap year.";
                } else {
                    var output = "Not leap year.";
                }
            } else {
                var output = "Leap year.";
            }
        } else {
            var output = "Not leap year.";
        }  
        return output; // All tests passed correctly
    }

