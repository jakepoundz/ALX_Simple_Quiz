// function declaration to the checker
function checkAnswer() {
    let correctAnswer = "4";

    //Retrieve users answer
    let userAnswer = document.querySelector("input[name=quiz]:checked").value;
    //getting users answer
    if (userAnswer === correctAnswer){
        document.getElementById("feedback").textContent = "Correct! Well done.";
    }
    else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
    
    
}
// button for function execution
document.getElementById("submit-answer").addEventListener('click', checkAnswer);