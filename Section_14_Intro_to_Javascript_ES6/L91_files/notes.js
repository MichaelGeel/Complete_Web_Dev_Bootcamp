// My solution to the Chessboard challenge:

function main(){
    fullWalk();
 }
 
 function step(){
    putBeeper();
    move();
    move();
 }
 
 function stepLeft(){
    putBeeper();
    turnLeft();
    move();
    turnLeft();
    move();
 }
 
 function stepRight(){
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
 }
 
 function backAndForth(){
    step();
    step();
    stepLeft();
    step();
    stepRight();  
 }
 
 function fullWalk(){
    backAndForth();
    backAndForth();
    step();
    step();
    putBeeper();
 }

 // The course provided solution:

 function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }