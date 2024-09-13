// Karel the Robot solutions:
function main(){
   //your code here
   fourSteps();
   turnLeft();
   fourSteps();
}

function fourSteps() {
   move();
   move();
   move();
   move();
}

// Alternative solution:

function main(){
    //your code here
    fullJourney();
 }
 
 function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();  
 }
 
 function smallStep() {
    move();
    turnLeft();
    move();
    turnRight();
 }
 
 function fullJourney() {
    smallStep();
    smallStep();
    smallStep();
    smallStep();
 }

 // code for challenge number 2:

 function main(){
    //your code here
    fullJourney();
 }
 
 function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();  
 }
 
 function smallStep() {
    move();
    turnLeft();
    move();
    turnRight();
    putBeeper();
 }
 
 function fullJourney() {
    putBeeper();
    smallStep();
    smallStep();
    smallStep();
    smallStep();
 }

 // Final challenge:
 