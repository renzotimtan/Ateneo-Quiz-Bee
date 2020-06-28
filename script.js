// Questions
var questionList = [
  "What is the full name of ADMU?",
  "What does AMDG stand for?",
  "What is the name of Ateneo's MAIN cafeteria?",
  "Who is the patron saint of Ateneo?",
  "What is Ateneo's mascot figure?",
  "Men and Women for _______",
  "Where can you find the Ateneo Art Gallery?",
  "What are the four Loyala Schools in ADMU?",
  "As of 2020, who is the school president?",
  "Bonus: Pogi ba si Renzo Tan?",
];

// Answers
var answersList = [
  "Ateneo de Manila University",
  "Ad Majorem Dei Gloriam",
  "Gonzaga Hall",
  "St. Ignatius of Loyola",
  "Eagle",
  "Others",
  "Arete",
  "SOM, SOSE, SOSS, SOH",
  "Fr. Jett",
  "Yes",
];

// Answer Choices
var squareOrder = [
  [
    "Ateneo de Municipal University",
    "Ateneo da Manila University",
    "Ateneo de Manila University",
    "Ateneyo de Manila University",
  ],
  [
    "All Mighty Dearest God",
    "Ad Majorem Dei Gloriam",
    "All More, Do Great",
    "Ad Maria Det Gloriam",
  ],
  ["JSEC", "Gonzaga Hall", "Faber Hall", "Arete"],
  [
    "St. Ignatius of Loyola",
    "St. Francis Xavier",
    "St. Ateneo Francisco",
    "St. Thomas Aquinas",
  ],
  ["Vulture", "Falcon", "Horse", "Eagle"],
  ["God", "Christ's Love", "Others", "The Poor"],
  ["Arete", "the Ateneo Museum", "Dela Costa Hall", "Faber Hall"],
  [
    "SOM, SOST, SOSE, SOSS",
    "SOM, SOSE, SOSS, SOH",
    "SOSE, SOT, SOS, SOM",
    "SOM, SOSE, SOS, SOSS",
  ],
  ["Fr. Ari", "Fr. John", "Fr. Jett", "Fr. Xavier"],
  ["Yes", "Yes", "Yes", "Yes"],
];

var questionIndex = 0;
var question = document.querySelector(".question");
var gameStatus = document.querySelector(".status");
var squares = document.querySelectorAll("#squares div");
var nextButton = document.querySelector(".nextButton");
var resetButton = document.querySelector(".resetButton");
var questionText = document.querySelector(".questionText");

init();

function init() {
  prepareUI();
  addReset();
  addNext();
}

function prepareUI() {
  question.textContent = questionList[questionIndex];
  for (var i = 0; i < squares.length; i++) {
    // Give text to all squares
    squares[i].textContent = squareOrder[questionIndex][i];
    // Add click functionality
    clickSquares();
  }
}

function clickSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      this.classList.remove("base");
      if (this.textContent === answersList[questionIndex]) {
        gameStatus.textContent = "CORRECT!";
        this.classList.add("correct");
      } else {
        gameStatus.textContent = "WRONG!";
        this.classList.add("wrong");
      }
    });
  }
}

function addReset() {
  resetButton.addEventListener("click", function () {
    resetSquareFormat();
    questionIndex = 0;
    prepareUI();
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.display = "block";
    }
    question.classList.remove("thankYou");
  });
}

function addNext() {
  nextButton.addEventListener("click", function () {
    gameStatus.textContent = "";
    if (questionIndex < questionList.length - 1) {
      resetSquareFormat();
      questionIndex++;
      prepareUI();
    } else {
      questionText.textContent = "";
      question.textContent = "Thanks for playing!";
      question.classList.add("thankYou");
      for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "none";
      }
    }
  });
}

function resetSquareFormat() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.remove("correct");
    squares[i].classList.remove("wrong");
    squares[i].classList.add("base");
  }
}
