// Creating a free-standing object with a function as a method attched to it:
var person1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"],
    moveSuitcase: function () {
    window.alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
    }
}

// Calling the object method:
person1.moveSuitcase();

// Adding a method to a Constructor Function:
function Person (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function () {
        window.alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}

// Lesson Challenge 1 Solution:
function HouseKeeper(name, age, skills, expereienceYears){
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.expereienceYears = expereienceYears;
    this.clean = function () {
        window.alert("Cleaning in progress...");
    }
}

// 