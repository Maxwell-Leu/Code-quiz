var timerEl = document.querySelector(".timer");
var welcomeEl = document.querySelector(".welcome");
var questionEl = document.querySelector(".question");
var timeLeft = 75;
var currentQuestion = -1;
var questionsAnswered = 0;
var questions =[
    {
        question: "what",
        choices: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "what2",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "what3",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        question: "what4",
        choices: ["1", "2", "3", "4"],
        answer: "4"
    }
];


function timer(){
    welcomeEl.setAttribute("style","display:none;");
    questionEl.setAttribute("style", "display:flex");
    changeQuestion();
    var timerInterval = setInterval(function(){
        timerEl.textContent = "Timer: " + timeLeft;
        if(timeLeft === 0){
            clearInterval(timerInterval);
        }
        timeLeft--;
    }, 1000)
}

//import { questions } from "./questions";
function changeQuestion(){
    if(currentQuestion < questionsAnswered){
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
    timerEl.textContent = "Timer: " + timeLeft;
}

function correctAnswer(){
    questionsAnswered++;
    changeQuestion();
}