// Global Vars:
var generatedList = [];
var userList = [];
var level = 1;
var blueSound = new Audio("./sounds/blue.mp3");
var greenSound = new Audio("./sounds/green.mp3");
var redSound = new Audio("./sounds/red.mp3");
var yellowSound = new Audio("./sounds/yellow.mp3");
var wrongSound = new Audio("./sounds/wrong.mp3");


function gameOver(){
    $("h1").text("Game Over, Press Any Key to Restart");
    wrongSound.play();
    $("body").toggleClass("game-over");
    setTimeout(function(){
        $("body").toggleClass("game-over");
    }, 200);
    generatedList = [];
    userList = [];
    level = 1;
    if ($._data(document, "events") == null){
        $(document).keypress(gameOn);
    }
}

function flashButton(color){
    $("."+color).fadeOut(duration=100);
    setTimeout(function(){
        $("."+color).fadeIn(100);
    }, 100);
}

function generatePattern(){
    var randomButton = (Math.floor((Math.random()*4)))+1;
    $("h1").text("Level "+level);
    switch(randomButton){
        case 1:
            generatedList.push("green");
            flashButton("green");
            greenSound.play();
            break;
        case 2: 
            generatedList.push("red");
            flashButton("red");
            redSound.play();
            break;
        case 3:
            generatedList.push("yellow");
            flashButton("yellow");
            yellowSound.play();
            break;
        case 4:
            generatedList.push("blue");
            flashButton("blue");
            blueSound.play();
            break;
        default:
            console.log("randomButton is no longer confined to numbers 1 to 4");
            break;
    }
}

function nextLevel(){
    level++;
    generatePattern();
    userList = [];
}

function checkInput(){
    if(userList[userList.length-1]!==generatedList[userList.length-1]){ //&& generatedList>0){
        gameOver();
    } else if (userList.length === generatedList.length){
        setTimeout(function(){
            nextLevel();
        }, 1000);
    }
}

$(".btn").click(function(event){
    var color = event.target.classList[1];
    userList.push(color)
    $("."+color).toggleClass("pressed");
    setTimeout(function(){
        $("."+color).toggleClass("pressed");
    }, 100);
    switch(color){
        case "green":
            greenSound.play();
            break;
        case "red": 
            redSound.play();
            break;
        case "yellow":
            yellowSound.play();
            break;
        case "blue":
            blueSound.play();
            break;
    }
    checkInput();
});

function gameOn(){
    $(document).off("keypress");
    generatePattern();
}

// // This starts the game.
$(document).keypress(gameOn);
