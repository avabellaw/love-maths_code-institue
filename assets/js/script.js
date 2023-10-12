document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "submit"){
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
 * The main game "loop"
 * Called intially and when the user's answer has been processed
 */
function runGame(gameType){

    // Sets the operands to random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition"){
        setOperands(num1, num2);
        displayAdditionQuestion();
    } else if(gameType === "multiply"){
        setOperands(num1, num2);
        displayMultiplyQuestion();
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborted`;
    }
 }

 function setOperands(num1, num2){
    document.getElementById("operand1").textContent = num1;
    document.getElementById("operand2").textContent = num2;
 }

/**
 * Checks answer against calculateCorrectAnswer()
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let correctAnswer = calculateCorrectAnswer();

    if(userAnswer === correctAnswer[0]){ 
        alert("Correct !");
        incrementScore();
    }
    else {
        alert(`nope... correct answer is ${correctAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(correctAnswer[1]);
}

/**
 * Gets the operands and the operator
 * returns correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if(operator === "-"){
        return [operand1 - operand2, "subtract"];
    } else if(operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else if(operator === "/"){
        return [operand1 / operand2, "Division"];
    } else {
        alert(`${operator} - Not recognised`);
        throw `${operator} - Not recognised`;
    }
}

/**
 * Gets current score and increments it
 */
function incrementScore(){
    let score = parseInt(document.getElementById("score").innerText); 
    document.getElementById("score").innerText = ++score;
}

/**
 * Gets current incorrect score and increments it
 */
function incrementWrongAnswer(){
    let score = parseInt(document.getElementById("incorrect").innerText); 
    document.getElementById("incorrect").innerText = ++score;
}

function displayAdditionQuestion(){
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){
    document.getElementById("operator").textContent = "x";

}

function displayDivisionQuestion(){

}