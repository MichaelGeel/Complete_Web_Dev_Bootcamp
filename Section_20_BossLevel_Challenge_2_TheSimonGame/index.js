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
}

function checkInput(){
    if(userList[userList.length-1]!==generatedList[userList.length-1]){ //&& generatedList>0){
        gameOver();
    } elif (userList.length === generatedList.length){
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

// function gameOn(){
//     var levelCount = 1;
//     var gameOver = false;
//     // while(!gameOver) {
//     levelCount++;
//     sequence = createSequence(levelCount);
//     showSequence(sequence);
//     // }
// }

// // This starts the game.
// $(document).keypress(gameOn); // Verified with testing.
// buttonToggle("green");