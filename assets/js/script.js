document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute("data-type") === "submit"){
                alert('submit');
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
    document.getElementById("operand1").innerHTML = num1;
    document.getElementById("operand2").textContent = num2;
 }

function checkAnswer(){

}

function calculateCorrectAnswer(){

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