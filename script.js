// *************** Grab DOM Elements ****************
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// **************** Declare Variables *******************
let score = 0;
let time = 0;
let currentQuestion = "";
let soundFX = new Audio("");

startButton.addEventListener("click", startGame);

// **************** Set Timer *******************
function setTime() {
  let timerInterval = setInterval(() => {
    time--;
    timer.textContent = `Timer: ${time}`;

    if (time === 0) {
      clearInterval(timerInterval);
      alert("Out of Time");

      if (currentQuestion < questions.length - 1) {
        endGame();
      }
    }
  }, 1000);
  return score;
}

// **************** Start Game *******************
function startGame() {}

// **************** Get New Question *******************
function getNewQuestion() {}

// **************** Show New Question *******************
function showQuestion() {}

// **************** Reset States *******************
function resetQuestion() {}

function endGame() {}

const questions = [
  {
    question: "How do you create a function in JavaScript",
    choices: [
      "function myFunction()",
      "function myFunction()",
      "function myFunction()",
      "function myFunction()",
    ],
    answer: "function myFunction()",
  },
];
