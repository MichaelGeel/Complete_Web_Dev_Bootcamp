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
    }, 50);
    setTimeout(function(){
        $(btnColor).removeClass("pressed");
    }, 100);
}

function showSequence(blockSeq){
    for(var i=0;i<blockSeq.length;i++){
        switch(blockSeq[i]){
            case 1:
                buttonToggle(".green");
                break;
            case 2:
                buttonToggle(".red");
                break;
            case 3:
                buttonToggle(".yellow");
                break;
            default:
                buttonToggle(".blue");
        }
    }
}

function gameOn(){
    var levelCount = 1;
    var gameOver = false;
    // while(!gameOver) {
    levelCount++;
    sequence = createSequence(levelCount);
    showSequence(sequence);
    // }
}

// This starts the game.
$(document).keypress(gameOn); // Verified with testing.
buttonToggle("green");