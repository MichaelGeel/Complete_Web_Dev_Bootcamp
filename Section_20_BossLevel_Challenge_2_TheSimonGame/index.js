function createSequence(length){ // Verified with unit testing.
    var blockSequence = [];
    for(var i=0; i<length;i++){
        blockSequence.push(Math.floor((Math.random()*4)+1));
    }
    console.log(blockSequence);
    return blockSequence;
}

function buttonToggle(btnColor){  // Verified with unit testing.
    setTimeout(function(){
        $(btnColor).addClass("pressed");
    }, 500);
    setTimeout(function(){

        $(btnColor).removeClass("pressed");
    }, 1000);
}

function showSequence(blockSeq){
    for(var i=0;i<blockSeq.length;i++){
        
    }
}

function gameOn(){
    var levelCount = 1;
    var gameOver = false;
    // while(!gameOver) {
    sequence = createSequence(levelCount);
    levelCount++;
    sequence = createSequence(levelCount);
    // }
}

// This starts the game.
$(document).keypress(gameOn); // Verified with testing.