var numberOfWon = 0;
var numberOfLost = 0;

for (let i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt("Enter a number from 1 to 5:"));

    var randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber === randomNumber) {
        console.log("You have won.");
        numberOfWon++;
    } else {
        console.log("You have lost. Random number was " + randomNumber);
        numberOfLost++;
    }
}

document.write("Number Of Won = " + numberOfWon + "<br>");
document.write("Number Of Lost = " + numberOfLost + "<br>");
