var body = document.body;
var h1Head = document.createElement("h1");
var allContent = document.createElement("div");
// var startQuizButton = document.querySelector(".startQuiz");
var sBtn = document.createElement("button")

var quizQuestion = document.createElement("h2");


var questionList = document.createElement("ul");
var q1 = document.createElement("li");
var q2 = document.createElement("li");
var q3 = document.createElement("li");
var q4 = document.createElement("li");

h1Head.textContent = "Coding Quiz Challenge";
quizQuestion.textContent = "Clicking the 'Start Quiz' button will start a 5 minute timer!";
sBtn.textContent = "Start Quiz";


// // quizQuestion.textContent = "What command is used to create a variable where the value stored cannot be changed dynamically?";
// q1.textContent = "let";
// q2.textContent = "var";
// q3.textContent = "function";
// q4.textContent = "const";



body.appendChild(h1Head);
body.appendChild(allContent);
allContent.appendChild(quizQuestion);
quizQuestion.appendChild(questionList);
// questionList.appendChild(q1);
// questionList.appendChild(q2);
// questionList.appendChild(q3);
// questionList.appendChild(q4);

// body.appendChild(q1);
// body.appendChild(q2);
// body.appendChild(q3);
// body.appendChild(q4);

allContent.appendChild(q1);
allContent.appendChild(q2);
allContent.appendChild(q3);
allContent.appendChild(q4);


// body.appendChild(startQuizButton);
body.appendChild(sBtn);





h1Head.setAttribute("style", "margin:auto; width:50%; padding: 25px 25px; text-align:center;");
allContent.setAttribute("style", "margin: 0 auto; display: block; padding: 25px 25px; text-align:center;");
sBtn.setAttribute("style", "background-color: lightGreen; border: 1px solid; border - color: black;border - radius: 5px;box - shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px 0px;color: hsl(0, 0 %, 100 %);display: inline - block;font - size: 22px;line - height: 22px;margin: 16px 16px 16px 20px;padding: 14px 34px; text-align: center;cursor: pointer; margin: 0 auto; display: block;");


// The startGame function is called when the start button is clicked
function startGame() {
  quizQuestion.textContent = "What command is used to create a variable where the value stored cannot be changed dynamically?";
  questionList.textContent = "Select one option";

  q1.textContent = "let";
  q2.textContent = "var";
  q3.textContent = "function";
  q4.textContent = "const";

  // isWin = false;
  // timerCount = 300;
  // // Prevents start button from being clicked when round is in progress
  // startQuizButton.disabled = true;
  // renderBlanks()
  // startTimer()
};

// Attach event listener to start button to call startGame function on click
sBtn.addEventListener("click", startGame);







/* 
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";
// Add text for list items
li1.textContent = "Apples 🍎 ";
li2.textContent = "Pizza 🍕 ";
li3.textContent = "Dumplings 🥟 ";
li4.textContent = "Cupcakes 🧁 ";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list items to ordered list element 
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
// Add styling to list element
listEl.setAttribute("style", "background:#333333; padding:20px;");
// Add styling to list items
li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
*/

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
*/

/* notes


// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

// Setting style of element
firstChildUl.style.color = "green";

<body>
  <h1>Open the Console to See the Magic ✨! </h1>

  <ul>
    <li id ="first-child-ul">Children[0]</li>
    <li>Children[1]</li>
    <li>Children[2]</li>
  </ul>




// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';

*/

/* setting attribute

<body>
    <h1 class="title">Changing JS Attributes</h1>
    <section class="container">
    <a>
        <img>
    </a>
    <div>We use the .setAttribute() method to change attributes of elements on our page.</div>
    <p>We can change any element just by grabbing it via the DOM.</p>
    <div class="change1">We use .querySelectorAll() to select multiple elements at the same time.</div>
    <p id="change2">We can also grab elements using the id.</p>
    </section>

    <script src="assets/js/script.js"></script>
</body>

// Access multiple elements using .querySelectorAll()
 var divTags = document.querySelectorAll("div");
 var pTags = document.querySelectorAll("p");
 var imgEl = document.querySelectorAll("img");

// Access element by ID using .querySelector()
 var changeP = document.querySelector("#change2");

// Sets first pTags to have a font-size of 40px
 pTags[0].setAttribute("style", "font-size: 40px;");

// Sets changeP to have multiple style attributes
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");

 // Sets image source of the first image
 imgEl[0].setAttribute("src", "./assets/images/image_1.png");

// Adds size and width styling to image
 imgEl[0].setAttribute("style", "width:50%");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < divTags.length; i++) {
  divTags[i].setAttribute("style", "color:blue; font-size: 30px");
 }
*/

/* comments

be thinking about an array of objects might be useful
use functions to control flow
no questions/answeers in html
how can we genearte each new question and aswers on demand
get quiz to work with one or two questions

*/
