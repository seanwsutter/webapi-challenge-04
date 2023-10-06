var startBtnEl = document.getElementById("startBtn")
var questionContainerEl = document.getElementById("questionContainer")
var questionElement = document.getElementById("question")
var optionsButtonEl = document.getElementById("optionBtns")

var shuffleQuestions
var currentQuestioni

/* arrays to to hold list of questions with objects */
var questions = [
  {
    question: "What is the basic scripting language used by web browsers to render pages on the world wide web.",
    options: [ // added 2nd array
      { text: "HyperText Markup Language", correct: true },
      { text: "Cascade Style Sheets", correct: false },
      { text: "Javascript", correct: false },
      { text: "World Wide Web", correct: false }
    ]
  },
  {
    question: "When navigating directories in the terminal, what does the command 'ls' do?",
    options: [
      { text: "it will make a new list file", correct: false },
      { text: "creates a new folder", correct: false },
      { text: "it will list the contents of a directory", correct: true },
      { text: "opens a new terminal window at folder", correct: false },
    ]
  }
]

startBtnEl.addEventListener('click', startGame);

/* function startGame */
function startGame() {
  console.log("check");

  startBtnEl.classList.add('hide') // will use html hide class on Start Quiz button
  shuffleQuestions = questions.sort(() => Math.random() - .5) // ES6 arrow function, TLDR it random selects question
  currentQuestioni = 0
  questionContainerEl.classList.remove("hide") // will remove the hide class from options div 
  nextQuestion()

}
// /* function nextQuestion */
// function nextQuestion() {
//   showQuestion(questions[currentQuestioni])

// }

function nextQuestion() {
  showQuestion(shuffleQuestions[currentQuestioni])

}
function showQuestion(question) {
  questionElement.innerText = question.question
}


/* function selectOption  */
function selectOption() {


}







































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









// // // h1El.setAttribute("style", "margin:auto; width:50%; padding: 25px 25px; text-align:center;");
// // allContent.setAttribute("style", "margin: 0 auto; display: block; padding: 25px 25px; text-align:center;");
// // sBtn.setAttribute("style", "background-color: lightGreen; border: 1px solid; border - color: black;border - radius: 5px;box - shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;color: hsl(0, 0 %, 100 %);display: inline - block;font - size: 22px;line - height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px; text-align: center;cursor: pointer; margin: 0 auto; display: block;");


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
// };


// // function countdown() {
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
get quiz to work with one or two questions

*/
