// *************** Grab DOM Elements ****************
const startBtn = document.getElementById("startButton");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");
const questionText = document.getElementById("questionText");
const gameContainer = document.getElementById("game-div");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// **************** Declare Variables *******************
let score = 0;
let time = 120;
let randQuestion = "";
let questionIndex = 0;
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
    } else if (questionIndex === questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
  // return score;
}

// **************** Start Game *******************
function startGame() {
  randQuestion = questions.sort(() => Math.random() - 0.5);
  questionIndex = 0;
  showNextQuestion();
}

// **************** Show Question *******************
function showNextQuestion() {
  showQuestion(randQuestion[questionIndex]);
}

// **************** Get New Question *******************
function showQuestion() {
  startButton.classList.add("hide");
  if (questionIndex === questions.length) {
    // endGame();
  } else {
    questionText.innerText = questions[questionIndex].question;
    answer1.textContent = questions[questionIndex]["choices"][0];
    answer2.textContent = questions[questionIndex]["choices"][1];
    answer3.textContent = questions[questionIndex]["choices"][2];
    answer4.textContent = questions[questionIndex]["choices"][3];
  }
}

// ************ Select Answer Function *****************
function selectAnswer() {}

// **************** Reset States *******************
function resetQuestion() {}

function endGame() {}

answer1.hidden = true;
answer2.hidden = true;
answer3.hidden = true;
answer4.hidden = true;

startButton.addEventListener("click", showQuestion);
startButton.addEventListener("click", setTime);
startButton.addEventListener("click", () => {
  messageDiv.textContent = "";
});

answer1.addEventListener("click", () => {
  if (questions[questionIndex].choices[0] === [questionIndex].answer) {
    messageDiv.textContent = "Correct!";
  } else {
    messageDiv.textContent = "Wrong!";
    time -= 5;
  }
  questionIndex++;
  showNextQuestion();
});

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
