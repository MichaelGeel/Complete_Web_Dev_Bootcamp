function rollDice(){
    return Math.floor(Math.random()*6)+1;
}

function whoWon(p1Score, p2Score){
    var output = "";
    if(p1Score === p2Score){
        output = "Draw!"
    } else if(p1Score > p2Score){
        output = "Player 1 Wins!";
    } else {
        output = "Player 2 Wins!";
    }
    return output;
}

function gameOn(){
    var player1Score = rollDice();
    var player2Score = rollDice();
    document.querySelector(".img1").setAttribute("src", "./images/dice" + player1Score + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice"+ player2Score + ".png");
    var result = whoWon(player1Score, player2Score);
    document.querySelector("h1").textContent = result;
}

gameOn();