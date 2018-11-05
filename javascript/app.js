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
    }
]

//Prints questions/answers.
function printQA() {
    document.getElementById("trivia-questions").innerText = triviaQuestions[q].Q;
    document.getElementById("gameA1").innerText = triviaQuestions[q].A[0];
    document.getElementById("gameA2").innerText = triviaQuestions[q].A[1];
    document.getElementById("gameA3").innerText = triviaQuestions[q].A[2];
    document.getElementById("gameA4").innerText = triviaQuestions[q].A[3];
}

function guessingTime() {
    answer = triviaQuestions[0].A[0];
    if (answer === triviaQuestions[0].correctA) {
        score++;
        console.log("yay!");
    }
    q++;
    printQA();
}

function guesses() {
    console.log("function!");
    $("#gameA1").on('click', function() {
        guessingTime();
    })
    $("#gameA2").on('click', function() {
        guessingTime();
    })
    $("#gameA3").on('click', function() {
        guessingTime();
    })
    $("#gameA4").on('click', function() {
        guessingTime();
    })

}

window.onload = function crystalClicks() {
$("#btn-start").on('click', function() {
    console.log(triviaQuestions);
    printQA();
    guesses();
})
}