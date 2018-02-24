var gem1Value = 0;
var gem2Value = 1;
var gem3Value = 2;
var gem4Value = 3;
var magicNumber = 42;
var score = 0;

var wins = 0;
var losses = 0;

// 1. init function
function init() {
    magicNumber = Math.floor((Math.random() * 101) + 20);
    gem1Value = Math.floor((Math.random() * 12) + 1);
    gem2Value = Math.floor((Math.random() * 12) + 1);
    gem3Value = Math.floor((Math.random() * 12) + 1);
    gem4Value = Math.floor((Math.random() * 12) + 1);
    score = 0;
    $("#magicNumber").text(magicNumber);
    $("#currentScore").text(score);
   
    console.log("magicNumber = " + magicNumber);
    console.log("gem1Value = " + gem1Value);
    console.log("gem2Value = " + gem2Value);
    console.log("gem3Value = " + gem3Value);
    console.log("gem4Value = " + gem4Value);
    console.log("score = " + score);
}
// 2. update function to update score and html score.
function updateScore(gemValue) {
    score += gemValue;
    console.log("currentScore = " + score);
    $("#currentScore").text(score);
    if (score > magicNumber) {
        losses += 1;
        $("#loss").text(losses);
       $("#loseAlert").text("YOU LOSE! The magic number was " + magicNumber + ". Your score was " + score + ".");
       $("#loseAlert").show(); 
       init();
    }
    else if (score === magicNumber) {
        wins += 1;
        $("#wins").text(wins);
        $("#winAlert").text("YOU WIN! You matched the magic number: " + magicNumber);
        $("#winAlert").show();
        init();
    }
    else {
        $("#loseAlert").hide();
        $("#winAlert").hide();
    }
}
function gemClicked() {
    switch (this.id) {
        case "gem1":
            console.log("gem1Clicked");
            updateScore(gem1Value);

            break;
        case "gem2":
            console.log("gem2Clicked");
            updateScore(gem2Value);
            break;

        case "gem3":
            console.log("gem3Clicked");
            updateScore(gem3Value);

            break;
        case "gem4":
            console.log("gem4Clicked");
            updateScore(gem4Value);

            break;
        default:
            break;
    }
}

$(document).ready(function () {
    $(".gemLink").on("click", gemClicked);
    init();

});
