
var numberOfWon =0;
var numberOfLost = 0;

for( i = 1; i <5; i++){
var guessNumber = parseInt(prompt("enter a number from 1 to 5 :"));

var randomNumber = Math.floor(Math.random()*5) + 1;

if(guessNumber == randomNumber ){
    console.log("you have won .");
    numberOfWon++;
}else{
    console.log("you have lost. random number was" + randomNumber );
    numberOfLost++;
}
}


document.write("Nummber Of Won = " + numberOfWon + "<br>");


document.write("Nummber Of Lost = " + numberOfLost + "<br>");