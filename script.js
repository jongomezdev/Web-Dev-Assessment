// *************** Grab DOM Elements ****************
const startBtn = document.getElementById("startButton");
const questionText = document.getElementById("questionText");
const gameContainer = document.getElementById("game-div");
const answerButtons = document.getElementById("answers");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// **************** Declare Variables *******************
let score = 0;
let time = 0;
let randQuestion = "";
let currentQuestionIndex = 0;
let soundFX = new Audio("");

startButton.addEventListener("click", startGame);

// **************** Set Timer *******************
function setTime() {
  let timerInterval = setInterval(() => {
    time--;
    timer.textContent = `Timer: ${time}`;

    if (time === 0) {
      clearInterval(timerInterval);
      alert("You ran out of time!");
      // endGame();
    } else if (currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
  // return score;
}

// **************** Start Game *******************
function startGame() {
  startBtn.classList.add("hide");
  randQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  showNextQuestion();
}

// **************** Show Question *******************
function showNextQuestion() {
  showQuestion(randQuestion[currentQuestionIndex]);
}

// **************** Get New Question *******************
function showQuestion() {
  if (currentQuestionIndex === questions.length) {
    // endGame();
  } else {
    questionText.innerText = questions[currentQuestionIndex].question;
    answers.textContent = questions[currentQuestionIndex].choices[0];
    answers.textContent = questions[currentQuestionIndex].choices[1];
    answers.textContent = questions[currentQuestionIndex].choices[2];
    answers.textContent = questions[currentQuestionIndex].choices[3];
  }
}
// answerButtons.addEventListener("click");

// ************ Select Answer Function *****************
function selectAnswer() {}

// **************** Reset States *******************
function resetQuestion() {}

function endGame() {}

// ************************* Questions ***********************
const questions = [
  {
    question: "How do you create a function in JavaScript",
    choices: [
      "function myFunction()",
      "function = myFunction()",
      "function:myFnction()",
      "function()",
    ],
    answer: "function myFunction()",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onmouseclick", "onchange", "onclick", "onmouseover"],
    answer: "onclick",
  },
];
