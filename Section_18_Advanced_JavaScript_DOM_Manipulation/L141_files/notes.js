// Creating an object:
var person1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["French", "English"]
}

// Accessing a property from the object:
window.alert("Hello, my name is " + person1.name);

// Lesson Challenge 1:
var houseKeeper1 = {
    name: "Alisha",
    age: 23,
    skills: ["Scrubbing", "Polishing", "Washing Clothes"],
    experienceYears: 5
}

// Creating a Person Constructor Function:
function Person (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.lagnauges = languages;
}

// Initializing an object with a constructor function:
var person1 = new Person("Timmy", 19, true, ["French", "English"]);

// Lesson Challenge 2:
function HouseKeeper(name, age, skills, expereienceYears){
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.expereienceYears = expereienceYears;
}