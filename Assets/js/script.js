
var quizRules = document.getElementById("quizRules")

var timerTextEl = document.getElementById("timerText")
var secondsLeft = 180;

var questionContainerEl = document.getElementById("questionContainer")
var questionTitleEl = document.getElementById("questionTitle")

var startBtnEl = document.getElementById("startBtn")
var optionsButtonEl = document.getElementById("optionBtns")
var buttonClassEl = document.querySelector(".buttonClass")

var optionAEl = document.getElementById("optionA")
var optionBEl = document.getElementById("optionB")
var optionCEl = document.getElementById("optionC")
var optionDEl = document.getElementById("optionD")

/*** questionsArray ***/
var questionsArray = [
  {
    question: "What is the basic scripting language used by web browsers to render pages on the world wide web.",
    options: [
      { optionA: "HyperText Markup Language" },
      { optionB: "Cascade Style Sheets" },
      { optionC: "Javascript" },
      { optionD: "World Wide Web" },
    ],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "When navigating directories in the terminal, what does the command 'ls' do?",
    options: [
      { optionA: "it will make a new list file" },
      { optionB: "creates a new folder" },
      { optionC: "it will list the contents of current directory" },
      { optionD: "opens a new terminal window at folder" },
    ],
    correctAnswer: "it will list the contents of current directory"
  },
]

/*** quizTimer function ***/
function quizTimer() {
  // var secondsLeft = 180;
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerTextEl.textContent = "Quiz Timer: " + secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval); // Stops timer
    }
  }, 1000);
  console.log("timer in progress..");
}

/*** function checkAnswer ***/
function checkAnswer() {
  console.log("checking..");
  if (questionsArray[0].correctAnswer) {
    console.log("correct");
  } else {

  }
}

/*** function setQuizQuestions ***/
function setQuizQuestions() {
  for (var i = 0; i < questionsArray.length; i++) {
    questionTitleEl.textContent = questionsArray[i].question

    optionAEl.textContent = questionsArray[i].options[0].optionA
    optionBEl.textContent = questionsArray[i].options[1].optionB
    optionCEl.textContent = questionsArray[i].options[2].optionC
    optionDEl.textContent = questionsArray[i].options[3].optionD

    console.log(questionsArray[i]);
  }
}

/*** function startGame ***/
function startGame() {
  console.log("checking startGame..");
  startBtnEl.classList.add('hide'); // hide start button
  questionContainerEl.classList.remove("hide"); // show question container
  quizRules.classList.add('hide'); // hide quiz rules
  optionsButtonEl.classList.remove("hide"); // show button options
  quizTimer();
  setQuizQuestions(); // cycle through question array
}

/*** check function ***/
buttonClassEl.addEventListener("click", function (click) {
  for (var i = 0; i < questionsArray.length; i++)
    if (i === questionsArray.length) {
      return

    } else {
      var element = click.target;
      var correct = questionsArray[i].correctAnswer;
      i++;
      console.log(correct);

      if (element.textContent === correct) {
        console.log("good");
        questionTitleEl.textContent = questionsArray.question[0]
        console.log("wat");
        // it loops back to load the next question
        // addQuestion();

        // scoring happens as the next question loads

        // score++;
        // console.log("score:" + score);
        // showCorrectResult();
        // showScore();
        // saveScore();
      } else {
        console.log("incorrect, -30 seconds");
        secondsLeft = secondsLeft - 30;
        // console.log("score:" + score);
        // showIncorrectResult();
        // showScore();
        // if (i === questionsArray.length) {
        //   // saveScore();
        // }
      }
    }
});

buttonClassEl.addEventListener('click', checkAnswer)
startBtnEl.addEventListener('click', startGame, quizTimer);





/** comments

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