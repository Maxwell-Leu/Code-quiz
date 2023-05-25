var timerEl = document.querySelector(".timer");
var welcomeEl = document.querySelector(".welcome");
var timeLeft;
var currentQuestion = 0;


function timer(){
    welcomeEl.setAttribute("style","display:none;")
    timeLeft = 75;
    var timerInterval = setInterval(function(){
        timerEl.textContent = "Timer: " + timeLeft;
        if(timeLeft === 0){
            clearInterval(timerInterval);

        }
        timeLeft--;
    }, 1000)
}