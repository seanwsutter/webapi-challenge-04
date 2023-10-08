var startBtnEl = document.getElementById("startBtn")
var questionContainerEl = document.getElementById("questionContainer")
var questionTitleEl = document.getElementById("questionTitle")
var optionsButtonEl = document.getElementById("optionBtns")
var quizRules = document.getElementById("quizRules")
var timerTextEl = document.getElementById("timerText")
var secondsLeft = 180;
var optionAEl = document.getElementById("optionA")
var optionBEl = document.getElementById("optionB")
var optionCEl = document.getElementById("optionC")
var optionDEl = document.getElementById("optionD")
var buttonClassEl = document.querySelector(".buttonClass")
var a;
var answerA;

function quizTimer() {
  // var secondsLeft = 180;   
  // console.log(secondsLeft)
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerTextEl.textContent = "Quiz Timer: " + secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval); // Stops timer
    }
  }, 1000);
}

var questionsArray = [
  {
    question: "What is the basic scripting language used by web browsers to render pages on the world wide web.",
    options: [
      { a: "HyperText Markup Language", correct: true },
      { b: "Cascade Style Sheets", correct: false },
      { c: "Javascript", correct: false },
      { d: "World Wide Web", correct: false },
    ],


  },
  {
    question: "When navigating directories in the terminal, what does the command 'ls' do?",
    options: [
      { a: "it will make a new list file", correct: false },
      { b: "creates a new folder", correct: false },
      { c: "it will list the contents of a directory", correct: true },
      { d: "opens a new terminal window at folder", correct: false },
    ],
    correct: true

  },
]/* arrays to to hold list of questions with objects */
buttonClassEl.addEventListener('click', checkAnswer)

function checkAnswer() {
  console.log("checking..");
  if (questionsArray.options.correct === true) {
    console.log("correct");

  }

}

function setQuizQuestions() {
  for (var i = 0; i < questionsArray.length; i++) {
    console.log(questionsArray[i]);
    questionTitleEl.textContent = questionsArray[i].question

    optionAEl.textContent = questionsArray[i].options[0].a
    optionBEl.textContent = questionsArray[i].options[1].b
    optionCEl.textContent = questionsArray[i].options[2].c
    optionDEl.textContent = questionsArray[i].options[3].d
  }
}
// function checkAnswer() {
/* function startGame */
function startGame() {
  console.log("checking..");

  startBtnEl.classList.add('hide'); // will use html hide class on Start Quiz button
  questionContainerEl.classList.remove("hide"); // will remove the hide class from options div 
  quizRules.classList.add('hide');
  optionsButtonEl.classList.remove("hide");
  quizTimer();
  setQuizQuestions();

}

// object.addEventListener("click", myScript);


// optionAEl.addEventListener('click', function (event) {

// })
startBtnEl.addEventListener('click', startGame, quizTimer);
// startBtnEl.addEventListener('click', quizTimer);


// }
// var body = document.body;

// var startBtn = document.querySelector(".startButton");
// // var startBtn = document.createElement("button")
// var h1El = document.querySelector(".title");
// var pTag = document.querySelector("#question");

// // var h3El = document.querySelector('timer')
// // var timer = document.querySelector(".timer")
// // var timerElement = document.querySelector(".timer-count");
// var mainContentEl = document.querySelector(".mainContent");

// // var quizQuestion = document.createElement("h2");
// // var questionList = document.createElement("ul");

// // Selects element by class
// var timerEl = document.querySelector(".timer");

// // h1El.textContent = "Coding Quiz Challenge";
// // quizQuestion.textContent = "Clicking the 'Start Quiz' button will start a 5 minute timer!";
// // startBtn.textContent = "Start Quiz";

// // // quizQuestion.textContent = "What command is used to create a variable where the value stored cannot be changed dynamically?";
// // q1.textContent = "let";
// // q2.textContent = "var";
// // q3.textContent = "function";
// // q4.textContent = "const";

// // The startGame function is called when the start button is clicked
// // quizQuestion.textContent = "What command is used to create a variable where the value stored cannot be changed dynamically?";
// // questionList.textContent = "Select one option";

// function quizTimer() {
//   var timeLeft = 180;
//   console.log(timeLeft);
//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerTextEl.textContent = timeLeft;
//       timeLeft--;
//     } else {
//
//       clearInterval(timeInterval); // `clearInterval()` to stop the timer
//     }

/* mini project pseudo

1 Listen for click event listener
2 start timer - update countdown
  a. eery second - check if game is won or if letters match
    1 end game as win
  b. if timer runs out
    2 end game as loss
3 choose word for user to guess (array)
4 same function *** display word on screen in "jhidden" form
5 listen for keydown event
  a. verify letter pressed is in the word
   b. same function *** modify display to reveal underscore
    c. if they guess letter, hav they guessed all the letters
      1 end game as a win
6 once game is over win or loose - display

/* comments

be thinking about an array of objects might be useful
use functions to control flow
no questions/answeers in html
how can we genearte each new question and aswers on demand
get quiz to work with one or two question 
**/
