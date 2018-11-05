//Question: How many earths can fit inside of the sun? Answer: 1 million earths
//Question: What is the hottest planet in our solar system? Answer: Venus
//Question: How old is our solar system? Answer: 4.6 billion years old.
//Question: A lightyear is equal to approximately how many miles? Answer: 5.88 trillion miles
//Question: Which galaxy is the closest to us? Answer: Andromeda Galaxy
//Question: How many astronomical units (AU) is Earth from the Sun? Answer: 1 AU
//Question: On Venus, it snows ______ and rains ______. Answer: metal, sulfuric acid
//Question: What is the brightest star in the night sky? Answer: Sirius
//Question: What is the farthest star the Hubble Telescope has found? Answer: Icarus, 5 billion lightyears away
//Question: What is the closest star to Earth? Answer: Proxima Centauri
//------------------------------------------------------------------------

//First I need to declare global variables I know I will need.
var score = 0;
var correct = false;
var answer = "";
var q = 0;
//-----Question/Answer Array-------------------
var triviaQuestions = [
    {
        Q: "How many earths can fit inside of the sun?",
        correctA: "1 million Earths",
        A: ["1 million Earths", "100 Earths", "10 thousand Earths", "1 billion Earths"]
    },
    {
        Q: "What is the hottest planet in our solar system?",
        correctA: "Venus",
        A: ["Mars", "Mercury", "Venus", "Jupiter"]
    },
    {
        Q: "How old is our solar system?",
        correctA: "4.6 billion years old",
        A: ["10.2 billion years old", "4.6 billion years old","7,567 years old", "5.4 million years old"]
    },
    {
        Q: "A lightyear is equal to approximately how many miles?",
        correctA: "5.88 trillion miles",
        A: ["1.2 billion miles", "145 thousand miles", "90 million miles", "5.88 trillion miles"]
    },
    {
        Q:"Which galaxy is the closest to us?",
        correctA: "Andromeda Galaxy",
        A: ["Andromeda Galaxy", "Alpha Centauri", "Orion Galaxy", "Kuiper Galaxy"]
    }
]
//------------------------------------------------

//Prints questions and answers to the screen.
function printQA() {
    document.getElementById("trivia-questions").innerText = triviaQuestions[q].Q;
    document.getElementById("gameA1").innerText = triviaQuestions[q].A[0];
    document.getElementById("gameA2").innerText = triviaQuestions[q].A[1];
    document.getElementById("gameA3").innerText = triviaQuestions[q].A[2];
    document.getElementById("gameA4").innerText = triviaQuestions[q].A[3];
}

//Used with each button click event to check if answer is correct.
function guessingTime() {
    if (answer === triviaQuestions[q].correctA) {
        score++;
        console.log("yay!");
    }
    q++;
    printQA();
}

//This stores each answer click as a variable and calls the guessing time function
function guesses() {
    console.log("function!");
    $("#gameA1").on('click', function() {
        answer = triviaQuestions[q].A[0];
        guessingTime();
    })
    $("#gameA2").on('click', function() {
        answer = triviaQuestions[q].A[1];
        guessingTime();
    })
    $("#gameA3").on('click', function() {
        answer = triviaQuestions[q].A[2];
        guessingTime();
    })
    $("#gameA4").on('click', function() {
        answer = triviaQuestions[q].A[3];
        guessingTime();
    })

}

//This tells the computer to finish loading the html before starting any functions.
window.onload = function now() {

//This starts the game when the user hits "Start!"
$("#btn-start").on('click', function() {
    console.log(triviaQuestions);
    printQA();
    guesses();
})
}