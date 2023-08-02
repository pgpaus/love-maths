//Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});

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

/**
 * Chcks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You've got it right! :D");
        incrementScore();
    } else {
        alert(`Aww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}
/**
 * Gets opperand (the numbers) and the operator (Plus, minus etc)
 * directly from the DOM and returns the correct answer
 */
function calculateCorrectAnswer() {

    let opperand1 = parseInt(document.getElementById('opperand1').innerText);
    let opperand2 = parseInt(document.getElementById('opperand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [opperand1 + opperand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}. Aborting!`;
    }
}
/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
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

function displayDivisionQuestion() {

}