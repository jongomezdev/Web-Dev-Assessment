// *************** Grab DOM Elements ****************
const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const timer = document.querySelector("#time");
const messageDiv = document.querySelector("#message");

// **************** Declare Variables *******************
let score = 0;
let time = 60;
let randQuestions = "";
let currentQuestion = "";
let soundFX = new Audio("");

startButton.addEventListener("click", startGame);

function setTime() {}

function startGame() {}

function getNewQuestion() {}

function showQuestion() {}

function resetQuestion() {}
