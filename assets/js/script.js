//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})
    
/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 through 25

    let num1 = Math.floor(Math.random() * 25);
    let num2 = Math.floor(Math.random() * 25);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unkown game type: ${gameType}`);
        throw `unkown game type: ${gameType}. Aborting!`;
    }
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(opperand1, opperand2) {
    document.getElementById('opperand1').textContent = opperand1;
    document.getElementById('opperand2').textContent = opperand2;
    document.getElementById('operator').textContent = "+";


}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion () {

}