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

    if(userAnswer === correctAnswer[0]){ alert("correct")}
    else {
        alert(`nope... correct answer is ${correctAnswer[0]}`);
    }

    console.log(correctAnswer[1]);
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
        return [operand1 - operand2, "subtraction"];
    } else if(operator === "*"){
        return [operand1 * operand2, "multiplication"];
    } else if(operator === "/"){
        return [operand1 / operand2, "Division"];
    } else {
        alert(`${operator} - Not recognised`);
        throw `${operator} - Not recognised`;
    }
}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){
    document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestion(){

}
function displayMultiplyQuestion(){

}

function displayDivisionQuestion(){

}