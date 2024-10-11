// Global Vars:
var generatedList = [];
var userList = [];
var level = 1;


function gameOver(){
    $("h1").text("Game Over, Press Any Key to Restart");
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
            break;
        case 2: 
            generatedList.push("red");
            flashButton("red");
            break;
        case 3:
            generatedList.push("yellow");
            flashButton("yellow");
            break;
        case 4:
            generatedList.push("blue");
            flashButton("blue");
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
        nextLevel();
    }
}

$(".btn").click(function(event){
    var color = event.target.classList[1];
    userList.push(color)
    $("."+color).toggleClass("pressed");
    setTimeout(function(){
        $("."+color).toggleClass("pressed");
    }, 100);
    checkInput();
});

// function createSequence(length){ // Verified with unit testing.
//     var blockSequence = [];
//     for(var i=0; i<length;i++){
//         blockSequence.push(Math.floor((Math.random()*4)+1));
//     }
//     console.log(blockSequence);
//     return blockSequence;
// }

function gameOn(){
    $(document).off("keypress");
    generatePattern();
}

// // This starts the game.
$(document).keypress(gameOn);
