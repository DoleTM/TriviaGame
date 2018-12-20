// An object full of the questions, selections and answers to the trivia questions.
var triviaQuestions = [{
    question: "What is Michael Scott's hidden talent?",
    selection: ["Comedy", "Basketball", "Ice Hockey", "Party Planning"],
    answer: "Ice Hockey"
}, {
    question: "What does Darryl tell Michael to never touch while in the warehouse?",
    selection: ["Baler", "Forklift", "Ladder", "Knife"],
    answer: "Baler"
}, {
    question: "What is the name of the Dentist that Dwight goes to see but really meets up with Jan",
    selection: ["Dr. Hunter", "Crentist", "Rentist", "Dr. Mahan"],
    answer: "Crentist"
}, {
    question: "Who does Michael Scott NOT have a relationship with?",
    selection: ["Pam's Mom", "Cynthia", "Jan", "Carol"],
    answer: "Cynthia"
}, {
    question: "What band was Creed Bratton actually a part of in real life",
    selection: ["Steve Miller Band", "Rolling Stones", "The Pat Travers Band", "Grass Roots"],
    answer: "Grass Roots"
}, {
    question: "What day does Stanley say he likes?",
    selection: ["Pretzel Day", "Michael's Last Day", "Diversity Day", "Recyclops Day"],
    answer: "Pretzel Day"
}];

for (let i = 0; i < triviaQuestions.length; i++) {
    var questionDiv = $("#questions-div");
    questionDiv.append(triviaQuestions[i].question);

    var selbutton1 = triviaQuestions[i].selection[0];
    var selbutton2 = triviaQuestions[i].selection[1];
    var selbutton3 = triviaQuestions[i].selection[2];
    var selbutton4 = triviaQuestions[i].selection[3];
    
    $("#button1").append(selbutton1).attr("form");
    $("#button2").append(selbutton2).attr("form");
    $("#button3").append(selbutton3).attr("form");
    $("#button4").append(selbutton4).attr("form");
}
// add buttons and questions to the trivia div.

// Variable for the timer
var timerDisplay = 00;
// By clicking the start button it will "start" the game.
$("#start").click(function() {
    // Hide the start page.
    $(".start-div").hide();
    // Make the trivia div visible.
    $("#trivia-div").show();

    // Set the timer
    timerDisplay.setTimeout(function () {
        $("#timer").text(timerDisplay);
    }, 2000);
});

// function resultDisplay() {
//     var userInput;
//     var userCorrect;
//     var displayCorrect = 0;
//     var displayWrong = 0;
//     var displayNoInput = 0;

//     for (let i = 0; i < triviaQuestions.length; i++)
//         userCorrect = triviaQuestions[i].length
//     if (userInput === answer) {
//         displayCorrect++;
//     } else if (userInput !== answer) {
//         displayWrong++;
//     } else {
//         displayNoInput++;
//     }
// }