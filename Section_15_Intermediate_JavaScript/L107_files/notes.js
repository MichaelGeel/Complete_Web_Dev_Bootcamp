// Coding Exercise 6 solution:
function whosPaying(names) {
    
        var rng = Math.floor(Math.random() * names.length);
        var person = names[rng];
        
        return person + " is going to buy lunch today!";
    }