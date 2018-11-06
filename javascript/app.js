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

//VARIABLES

//user score
var score = 0;

//This global variable will later store the user answer choice so it can be compared to correctA.
var userAnswer = "";

//This variable keeps the game moving through the questions array.
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

//GAME TIME FUNCTIONS!!! 

function printQA() {
    //resets game to beginning. Stop-gap before I add the "restart?" option button.
    if (q == triviaQuestions.length) {
        q = 0;
    }

    //Prints the questions
    document.getElementById("trivia-questions").innerText = triviaQuestions[q].Q;

    //Prints the answers
    $("#gameA1").text(triviaQuestions[q].A[0]);
    $("#gameA2").text(triviaQuestions[q].A[1]);
    $("#gameA3").text(triviaQuestions[q].A[2]);
    $("#gameA4").text(triviaQuestions[q].A[3]);
    
}

//Need to add function to show answer screen with image

function trackScore() {
    if (userAnswer === triviaQuestions[q].correctA) {
        score++;
        console.log("Score: " + score);
        q++;
        printQA();
    }
    else {
        console.log("Score: " + score);
        q++;
        printQA();
    }
}

//Need to add timer function (using "increment")


//This tells the computer to finish loading the html before starting any functions.
window.onload = function now() {
    $("#btn-start").on('click', function () {
        console.log(triviaQuestions);
        printQA();
    })
    $("#gameA1").on('click', function () {
        userAnswer = triviaQuestions[q].A[0];
        trackScore();
    })
    $("#gameA2").on('click', function () {
        userAnswer = triviaQuestions[q].A[1];
        trackScore();
    })
    $("#gameA3").on('click', function () {
        userAnswer = triviaQuestions[q].A[2];
        trackScore();
    })
    $("#gameA4").on('click', function () {
        userAnswer = triviaQuestions[q].A[3];
        trackScore();
    })
}