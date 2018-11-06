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
var userAnswer = "";
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
        A: ["10.2 billion years old", "4.6 billion years old", "7,567 years old", "5.4 million years old"]
    },
    {
        Q: "A lightyear is equal to approximately how many miles?",
        correctA: "5.88 trillion miles",
        A: ["1.2 billion miles", "145 thousand miles", "90 million miles", "5.88 trillion miles"]
    },
    {
        Q: "Which galaxy is the closest to us?",
        correctA: "Andromeda Galaxy",
        A: ["Andromeda Galaxy", "Alpha Centauri", "Orion Galaxy", "Kuiper Galaxy"]
    },
    {
        Q: "How many astronomical units (AU) is Earth from the Sun?",
        correctA: "1 AU",
        A: ["1 AU", "1,000 AU", "90 AU", "10 AU"]
    },
    {
        Q: "On Venus, it snows ______ and rains ______.",
        correctA: "metal, sulfuric acid",
        A: ["carbon monoxide, ammonia", "metal, sulfuric acid", "limestone, magma", "dihydrogen monoxide, mercury"]
    },
    {
        Q: "What is the brightest star in the night sky?",
        correctA: "Sirius",
        A: ["Polaris (The North Star)", "Beetleguise", "Sirius", "Pandora"]
    },
    {
        Q: "What is the farthest star the Hubble Telescope has found?",
        correctA: "Icarus",
        A: ["Endymion", "Antigone", "Pericles", "Icarus"]
    },
    {
        Q: "What is the closest star to Earth?",
        correctA: "Proxima Centauri",
        A: ["Proxima Centauri", "Sirius", "Alpha Centauri", "Polaris"],
    },
]
//------------------------------------------------

//Prints questions and answers to the screen.
function printQA() {
    if (q == triviaQuestions.length) {
        q = 0;
    }
    document.getElementById("trivia-questions").innerText = triviaQuestions[q].Q;
    $("#trivia-answers").empty();
    for (var i = 0; i < triviaQuestions[q].A.length; i++) {
        var answerBtn = $("<button>");
        answerBtn.addClass("answers-btn");
        answerBtn.attr("answer-choice", triviaQuestions[q].A[i]);
        answerBtn.text(triviaQuestions[q].A[i]);
        $("#trivia-answers").append(answerBtn);
    }
    $("#trivia-answers").on('click', function () {
        console.log("clicks!");
        userAnswer = $(answerBtn).attr("answer-choice");
        console.log(userAnswer);
        guessingTime();
    })
}


// document.getElementById("gameA1").innerText = triviaQuestions[q].A[0];
// document.getElementById("gameA2").innerText = triviaQuestions[q].A[1];
// document.getElementById("gameA3").innerText = triviaQuestions[q].A[2];
// document.getElementById("gameA4").innerText = triviaQuestions[q].A[3];

//Used with each button click event to check if answer is correct.
function guessingTime() {
    if (userAnswer === triviaQuestions[q].correctA) {
        score++;
        console.log("yay!");
    }
    q++;
    printQA();
}

//This stores each answer click as a variable and calls the guessing time function

//This starts the game when the user hits "Start!"


//This tells the computer to finish loading the html before starting any functions.
window.onload = function now() {
    $("#btn-start").on('click', function () {
        console.log(triviaQuestions);
        printQA();

    })
}