function createSequence(length){
    var blockSequence = [];
    for(var i=0; i<length;i++){
        blockSequence.push(Math.floor((Math.random*4)+1));
    }
    return blockSequence;
}

function showSequence(blockSeq){
    for(var i=0;i<blockSeq.length;i++){
        
    }
}

function gameOn(){
    var levelCount = 1;
    var gameOver = false;
    while(!gameOver) {
        sequence = createSequence(levelCount);
    }
}

// This starts the game.
$(document).click();