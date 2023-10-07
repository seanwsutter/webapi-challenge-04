var startBtnEl = document.getElementById("startBtn")
var questionContainerEl = document.getElementById("questionContainer")
var questionTitleEl = document.getElementById("questionTitle")
var optionsButtonEl = document.getElementById("optionBtns")
var quizRules = document.getElementById("quizRules")
var timerTextEl = document.getElementById("timerText")
var secondsLeft = 180;
//clicking button starts timer by writing its number to a global variable
// startBtnEl.addEventListener('click', function () {
//   let timerId = setInterval(function () {
//     console.log('timer in progress', timerId)
//   }, 1000);
// });
function quizTimer() {
  // var secondsLeft = 180;   /// Sets interval in variable
  console.log(secondsLeft)
  var timerInterval = setInterval(function () {
    secondsLeft--;
    // document.getElementById("timerText").textContent = secondsLeft;
    timerTextEl.textContent = "Quiz Timer: " + secondsLeft + " seconds left";
    // console.log("seconds left:", secondsLeft); // one line


    if (secondsLeft === 0) { // Stops execution of action at set interval
      clearInterval(timerInterval);

    }


  }, 1000);
}
// function quizTimer() {
//   var timeLeft = 180;
//   console.log(timeLeft);

//   var timeInterval = setInterval(function () {
//     if (timeLeft > 1) {
//       timerTextEl.textContent = timeLeft;
//       timeLeft--;
//     } else {
//       timerTextEl.textContent = ''; //`timeLeft` 0 set `timerEl` to an empty string
//       clearInterval(timeInterval); // `clearInterval()` to stop the timer
//     }

/* arrays to to hold list of questions with objects */
var questionsArray = [
  {
    question: "What is the basic scripting language used by web browsers to render pages on the world wide web.",
    options: [{ text: "HyperText Markup Language" },
    { text: "Cascade Style Sheets" },
    { text: "Javascript" },
    { text: "World Wide Web" }
    ],
    correct: "HyperText Markup Language",
  },
]

// function setQuizQuestions() {
//   questionTitle.textContent = questionsArray[i].questio
//   question: "When navigating directories in the terminal, what does the command 'ls' do?",
//   options: [
//     { text: "it will make a new list file", correct: false },
//     { text: "creates a new folder", correct: false },
//     { text: "it will list the contents of a directory", correct: true },
//     { text: "opens a new terminal window at folder", correct: false },
//   ]
// }


// question: "What is the basic scripting language used by web browsers to render pages on the world wide web.",
//   options: [
//     { text: "HyperText Markup Language", correct: true },
//     { text: "Cascade Style Sheets", correct: false },
//     { text: "Javascript", correct: false },
//     { text: "World Wide Web", correct: false 


/* function startGame random array or for loop? */
function startGame() {
  console.log("check");

  startBtnEl.classList.add('hide') // will use html hide class on Start Quiz button
  questionContainerEl.classList.remove("hide") // will remove the hide class from options div 
  quizRules.classList.add('hide');
  quizTimer();
}




startBtnEl.addEventListener('click', startGame);
// startBtnEl.addEventListener('click', quizTimer);

// /* random? */
// function nextQuestion() {
//   showQuestion(questions[currentQuestioni])

// shuffleQuestions = questions.sort(() => Math.random() - .5) // ES6 arrow function, TLDR it random selects question
//   currentQuestioni = 0
//   nextQuestion()
// }

// function nextQuestion() {
//   showQuestion(shuffleQuestions[currentQuestioni])

// }
// function showQuestion(question) {
//   questionElement.innerText = question.question
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

// // q1.textContent = "let";
// // q2.textContent = "var";
// // q3.textContent = "function";
// // q4.textContent = "const";

// // isWin = false;
// // timerCount = 300;
// // // Prevents start button from being clicked when round is in progress
// // startQuizButton.disabled = true;
// // renderBlanks()
// // startTimer()


// function setTime() {
//   var secondsLeft = 180;

//   // Sets interval in variable
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     timerEl.textContent = secondsLeft + " seconds remaining";

//     if (secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       // sendMessage();
//     }

//   }, 1000);
// };// // function countdown() {
// //   var timeLeft = 180;

// //   var timeInterval = setInterval(function () {
// //     if (timeLeft > 1) {
// //       timerEl.textContent = timeLeft + ' seconds remaining';
// //       timeLeft--;

// // `setInterval()` method to call a function to be executed every 1000 milliseconds
// // As long as the `timeLeft` is greater than 1
// // Set the `textContent` of `timerEl` to show the remaining seconds, // decrement -1

// //     } else {
// //       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
// //       timerEl.textContent = '';
// //       // Use `clearInterval()` to stop the timer
// //       clearInterval(timeInterval);
// //       prompt.alert("game over")
// //     }
// //   }, 1000);
// // 


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
