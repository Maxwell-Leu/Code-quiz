var timerEl = document.querySelector(".timer");
var welcomeEl = document.querySelector(".welcome");
var questionEl = document.querySelector(".question");
var submitButton = document.getElementById("submit");
var userInfo = document.getElementById("user_initaials");
var endScreen = document.querySelector(".end");
var timeLeft = 75;
var currentQuestion = -1;
var questionsAnswered = 0;
var timerInterval
var questions =[
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "boolean", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statment is enclosed within ___.",
        choices: ["quotes", "curly brackets", "parentheses", "square brakets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers", "strings", "arrays", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "for loops"
    }
];


function timer(){
    welcomeEl.setAttribute("style","display:none;");
    questionEl.setAttribute("style", "display:flex");
    changeQuestion();
    timerInterval = setInterval(function(){
        timerEl.textContent = "Timer: " + timeLeft;
        if(timeLeft <= 0){
            timeLeft = 0;
            endCard();
            clearInterval(timerInterval);
        }
        timeLeft--;
    }, 1000)
}


function changeQuestion(){
    if(questionsAnswered == 4){
        endCard();
        clearInterval(timerInterval);
    }else if(currentQuestion < questionsAnswered){
        questionEl.children[0].textContent = questions[questionsAnswered].question;
        for(i = 0; i < 4; i++){
            if(questions[questionsAnswered].choices[i] === questions[questionsAnswered].answer){
                questionEl.children[i + 1].textContent = questions[questionsAnswered].choices[i];
                questionEl.children[i + 1].setAttribute("onclick", "correctAnswer()");
            }else{
                questionEl.children[i + 1].textContent = questions[questionsAnswered].choices[i];
                questionEl.children[i + 1].setAttribute("onclick", "wrongAnswer()");
            }
        }
        currentQuestion++;
    }
}


function wrongAnswer(){
    timeLeft-=20;
    if(timeLeft < 0)
        timeLeft = 0;
    timerEl.textContent = "Timer: " + timeLeft;
}


function correctAnswer(){
    questionsAnswered++;
    changeQuestion();
}


function endCard(){
    questionEl.setAttribute("style", "display:none");
    endScreen.setAttribute("style", "display:flex");
    endScreen.children[1].textContent = "Your score was: " + timeLeft;
}

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var user_score = {
        "initails": userInfo.value,
        "score": timeLeft
    }
    localStorage.setItem("user_score", JSON.stringify(user_score));
    window.location.href="./highscore.html";
})

