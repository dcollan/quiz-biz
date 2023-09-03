let timer = document.querySelector("p.time");
let remainingSeconds = 75;
const infoScreen = document.querySelector("#info");
const problemScreen = document.querySelector("#problems");
let showProblem = document.querySelector("#problem");
let problemsCompleted = 0;

const beginQuiz = document.querySelector("#begin");
const optionSelected = document.querySelectorAll("button.selected")
const firstChoice = document.querySelector("#choice1");
const secondChoice = document.querySelector("#choice2");
const thirdChoice = document.querySelector("#choice3");
const fourthChoice = document.querySelector("#choice4");


//Initialize Problems
const problems = [
    {
        problem: "What is the pillar in OOP programming that involves parent and child classes?",
        choices: [
        "1. Inheritance", 
        "2. Abstraction", 
        "3. Polymorphism", 
        "4. Encapsulation"
        ],
        solution: "1"
    },
    {
        problem: "Which of following belongs to the four pillars of computional thinking?",
        choices: ["Inheritance", "Abstraction", "3. Polymorphism", "4. Encapsulation"],
        solution: "2"
    },
    {
        problem: "In web development, which of the following is used to call HTML ID elements from a JavaScript class?",
        choices: [
        "1. .", 
        "2. --", 
        "3. $", 
        "4. #"
        ],
        solution: "4"
    },
    {
        problem: "Why is it an important practice to use 'let' or 'const' locally in web development?",
        choices: [
        "1. It allows for developers to identify bugs easier and more quickly in the code", 
        "2. It can help maintain storage capacity, preventing from too much space being consumed", 
        "3. It prevents the risk of other developers accidently modifying crucial code using the same variable once it's declared", 
        "4. It is not. 'Var' can also be another excellent practice when declaring variables. They are all the same"
        ],
        solution: "3"
    },
    {
        // question 4
        problem: "In CSS, which is the correct way to move an item to the right of the screen using flexbox?",
        choices: [
        "1. align-items: flex-start",
        "2. justify-content: flex-start", 
        "3. align-items: flex-end", 
        "4. justify-content: flex-end"
        ],
        solution: "4"
    }
];

// Functions

//Initialize Timer
function initializeTimer() {
    let timerInterval = setInterval(function () {
        remainingSeconds--;
        timer.textContent = "Seconds Left: " + remainingSeconds;

        if (remainingSeconds === 0 || problemsCompleted === problems.length) {
            clearInterval(timerInterval);
            showProblem.style.display = "none";
        }
    }, 1000);
}

//Setup navigation for user to course through problems upon selecting option
function initializeProblem(index) {
    if (index < problems.length) {
        showProblem.textContent = problems[index].problem;
        firstChoice.textContent = problems[index].choices[0];
        secondChoice.textContent = problems[index].choices[1];
        thirdChoice.textContent = problems[index].choices[2];
        fourthChoice.textContent = problems[index].choices[3];
    }
  }

//Setup functionality to begin quiz w/ timer upon click
function runQuiz() {
    infoScreen.style.display = "none";
    problemScreen.style.display = "block";
    problemsCompleted = 0;

    initializeTimer();
    initializeProblem(problemsCompleted);
}

//Initiate timer when user clicks 'begin'
beginQuiz.addEventListener("click", runQuiz);