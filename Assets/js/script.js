/** elements **/
var quizRules = document.getElementById("quizRules")
var timerTextEl = document.getElementById("timerText")
var questionContainerEl = document.getElementById("questionContainer")
var questionTitleEl = document.getElementById("questionTitle")

var startBtnEl = document.getElementById("startBtn")
var buttonClassEl = document.getElementById("optionBtns")
var submitBtn = document.querySelector("#submitScoreButton");
// var optionsButtonEl = document.getElementById("optionBtns")
var optionAEl = document.getElementById("optionA")
var optionBEl = document.getElementById("optionB")
var optionCEl = document.getElementById("optionC")
var optionDEl = document.getElementById("optionD")

var quizScoreEl = document.getElementById("quizScore");
var finalScoreEl = document.getElementById("timerText");
var initialsEl = document.querySelector("#initials");

var secondsLeft = 180;
var i = 0;

/*** questionsArray ***/
var questionsArray = [
  {
    question: "What is the basic scripting language used by web browsers to render pages on the world wide web.",
    options: ["HyperText Markup Language", "Cascade Style Sheets", "Javascript", "World Wide Web"],
    correctAnswer: "HyperText Markup Language",
  },
  {
    question: "When navigating directories in the terminal, what does the command 'ls' do?",
    options: ["it will make a new list file", "creates a new folder", "it will list the contents of current directory", "opens a new terminal window at folder"],
    correctAnswer: "it will list the contents of current directory",
  },
  {
    question: "Which of the following programming languages is a statically- typed language?",
    options: ["Python", "JavaScript", "Java", "Ruby"],
    correctAnswer: "Java",
  },
  {
    question: "In JavaScript, which of the following methods is used to add an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correctAnswer: "push()",
  }
]

/*** quizTimer function ***/
function quizTimer() {
  // var secondsLeft = 180;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerTextEl.innerHTML = "Quiz Timer: " + secondsLeft + " seconds left";
    if (secondsLeft < 0 || secondsLeft === 0) {
      clearInterval(timerInterval); // Stops timer
      quizEnd();
    }
  }, 1000);
  console.log("timer in progress..");
}
/*** function setQuizQuestions ***/
function setQuizQuestions() {
  // for (var i = 0; i < questionsArray.length; i++) {
  if (i === questionsArray.length || secondsLeft <= 0) { // out of questions / timer =0
    quizEnd()
    // console.log(secondsLeft);
  } else {
    questionTitleEl.textContent = questionsArray[i].question

    optionAEl.innerHTML = questionsArray[i].options[0]
    optionBEl.innerHTML = questionsArray[i].options[1]
    optionCEl.innerHTML = questionsArray[i].options[2]
    optionDEl.innerHTML = questionsArray[i].options[3]
    // console.log("in setQuizFunction");
  }
}

/*** function startGame ***/
function startGame() {
  console.log("starting game..");
  startBtnEl.classList.add('hide'); // hide start button
  questionContainerEl.classList.remove("hide"); // show question container
  quizRules.classList.add('hide'); // hide quiz rules
  buttonClassEl.classList.remove("hide"); // show button options
  quizTimer();
  setQuizQuestions();
}

/*** check function ***/
function check(click) {
  // for (var i = 0; i < questionsArray.length; i++)
  if (i === questionsArray.length || secondsLeft <= 0) { // out of questions / timer =0
    quizEnd()
  } else {
    questionTitleEl.textContent = questionsArray[i].question

    optionAEl.innerHTML = questionsArray[i].options[0]
    optionBEl.innerHTML = questionsArray[i].options[1]
    optionCEl.innerHTML = questionsArray[i].options[2]
    optionDEl.innerHTML = questionsArray[i].options[3]
    // console.log(" in setQuizFunction ");
  }
  if (questionsArray[i].length) {

    return
  } else {
    var element = click.target;
    var correct = questionsArray[i].correctAnswer;
    i++;
    // console.log(correct);
    console.log("current index in questions array", i);
    if (element.innerHTML == correct) {
      console.log("correct");
      // questionTitleEl.textContent = questionsArray[i].question[0]
      setQuizQuestions()
    } else {
      console.log("incorrect, -30 seconds. Time remaining:", secondsLeft = secondsLeft - 30)
      // console.log("time remaining:", + secondsLeft);
      setQuizQuestions()

    }
  }
};

buttonClassEl.addEventListener('click', check);
startBtnEl.addEventListener('click', startGame, quizTimer);

/* quizEnd function */
function quizEnd() {
  quizScoreEl.classList.remove('hide');
  questionContainerEl.classList.add("hide");
  // console.log(secondsLeft);
  // timerTextEl = secondsLeft;
  // quizScoreEl.classList.remove('hide');


}

/* savingScore function */
function saveScore() {
  var initials = initialsEl.value.trim();
  if (initials !== "") {
    var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
    var newScore = { score: secondsLeft, initials: initials }
    scores.push(newScore)
    window.localStorage.setItem("scores", JSON.stringify(scores));
    console.log("Saved new score:", newScore);
  }
}

submitBtn.onclick = saveScore;

/** comments

// get value of input box
// make sure value wasn't empty
// get saved scores from localstorage, or if not any, set to empty array
// submit button to saveinitials
// console.log(scores);
 
/* function checkAnswer 
// function checkAnswer() {
//   console.log("checking..");
//   if (questionsArray[i].correctAnswer) {
//     console.log("correct");
//   } else {

//   }
// }


miniproject
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
homework
be thinking about an array of objects might be useful
use functions to control flow
no questions/answeers in html
how can we genearte each new question and aswers on demand
get quiz to work with one or two question 

// // var quizQuestion = document.createElement("h2");
// // var questionList = document.createElement("ul");

*/