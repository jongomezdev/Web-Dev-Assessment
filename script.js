// *************** Grab DOM Elements ****************
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("questionText");
const answerButtonsEl = document.getElementById("answer-buttons");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// **************** Declare Variables *******************
let score = 0;
let time = 0;
let randQuestion = "";
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
function startGame() {
  startButton.classList.add("hide");
  randQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestion = 0;
  questionContainer.classList.remove("hide");
  getNewQuestion();
}

// **************** Show Question *******************
function showQuestion() {
  getNewQuestion();
}

// **************** Get New Question *******************
function getNewQuestion() {
  questionText.textContent = questions[currentQuestion].question;
}

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
