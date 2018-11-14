//-----Question/Answer Array-------------------
var triviaQuestions = [
    {
        Q: "How many Earths can fit inside of the Sun?",
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


var score = 0;
var userAnswer = "";
var q = 0;
var intervalId;
var time;
var intervalId2;
var time2;


//Answers for TAs who skipped astronomy class in school ;)
for (var i = 0; i < triviaQuestions.length; i++) {
    console.log((i + 1) + ": " + triviaQuestions[i].correctA);
}


function gameOver() {
    $("#btn-start").text("Play Again?")
    $("#btn-start").show();
    $("#empty-div").html("You Scored " + score + " out of 10!")
    $("#trivia-questions").hide();
    clearInterval(intervalId);
    $("#timer").hide();
}


function printQA() {
    //resets game to beginning if out of questions
    if (q == triviaQuestions.length) {
        gameOver();
    }
    else {
        //Prints the questions
        $("#trivia-questions").text(triviaQuestions[q].Q);

        //Prints the answers
        $("#trivia-answers").empty();
        for (var i = 0; i < triviaQuestions[q].A.length; i++) {
            var button = $("<button>");
            button.text(triviaQuestions[q].A[i]);
            button.attr("answer", triviaQuestions[q].A[i]);
            var a = $(button).attr("answer");
            button.addClass("answers-btn");
            $("#trivia-answers").append(button);
        }
        
        //Sets timer for amount of time per question
        timer();
        $("#timer").show();

        //Tracks the answer when answer button is clicked.
        $(".answers-btn").on("click", function () {
            userAnswer = $(this).attr("answer");
            trackScore();
        })
    }
}

function trackScore() {
    //IF YAY
    if (userAnswer === triviaQuestions[q].correctA) {
        userYay();
    }
    //IF NAY
    else {
        userWrong();
    }
}

//USER GUESSED CORRECTLY! -- EMPTY DIV CONTAINERS CONTENT
function userYay() {
    score ++;
    $("#trivia-answers").append("Correct!!!" + "<br>" + "Score: " + score);
    endOfQuestion();
    //Need to add photos and/or sound effects here
}
//USER GUESSED INCORRECTLY  
function userWrong() {
    endOfQuestion();
    $("#trivia-answers").html("Incorrect!" + "<br>" + "Correct Answer: " + triviaQuestions[q-1].correctA);
}

function endOfQuestion() {
    $("#trivia-answers").empty();
    q++;
    clearInterval(intervalId);
    $("#timer").hide();
    timer2();
}


//Question Timer
function timer() {
    time = 21;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    time--;
    $("#timer").html(time + " Seconds Remaining");
    //If out of time
    if (time === 0) {
        userWrong();
        q++;
        printQA();
    };
};

//Feedback Timer Variables
function timer2() {
    time2 = 3;
    clearInterval(intervalId2);
    intervalId2 = setInterval(decrement2, 1000);
};

function decrement2() {
    time2--;
    if (time2 === 0) {
        $("#trivia-answers").empty();
        printQA();
    };
};

//START BUTTON
$("#btn-start").on('click', function () {
    q = 0;
    printQA();
    $("#btn-start").hide();
})
