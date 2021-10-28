function generate_random(max_number) {
    return Math.round(Math.random() *max_number);
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function(){
    
    let randomNumber = generate_random(9);
    let answerText = "";
    if (randomNumber == 0) {
        answerText = "Yes, definitely!";
    }
    else if ( randomNumber == 1) {
        answerText = "No, Certaintly not!";
    }
    else if ( randomNumber == 2) {
        answerText = "Ask Agin later";
    }
    else if ( randomNumber == 3) {
        answerText = "Your destiny will find you";
    }
    else if ( randomNumber == 4) {
        answerText = "Better not tell you now";
    }
    else if ( randomNumber == 5) {
        answerText = "Most likely";
    }
    else if ( randomNumber == 6) {
        answerText = "Yes, If you work hard.";
    }
    else if ( randomNumber == 7) {
        answerText = "Signs point to yes";
    }
    else if ( randomNumber == 8) {
        answerText = "Your future is unclear";
    }
    else {
        answerText = "Be patient";
    }
    answer.innerHTML = answerText;

});

// shakes the 8 ball
 