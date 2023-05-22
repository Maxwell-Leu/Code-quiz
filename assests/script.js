var timerEl = document.querySelector(".timer");
var questionEl = document.querySelector(".question");
var timeLeft;
var currentQuestion = 0;


function timer(){
    timeLeft = 75;
    var timerInterval = setInterval(function(){
        timerEl.textContent = "Timer: " + timeLeft;
        if(timeLeft === 0){
            clearInterval(timerInterval);

        }
        timeLeft--;
    }, 1000)
}