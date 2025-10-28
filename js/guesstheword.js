"use strict";

let textInput = document.getElementById("myText");
let textInputButton = document.getElementById("myButton");
let output = document.getElementsByClassName("output");
let incorrect = document.getElementById("incorrect");

// === Change the word here (must match number of .output spans) ===
let letters = ['m', 'i', 'a', 'm', 'i'];  // example: "duke"

textInputButton.addEventListener("click", function() {
    // normalize: take first character, lowercase
    let userVal = (textInput.value || "").trim().toLowerCase();
    if (userVal.length > 0) userVal = userVal[0];
    console.log("textInput: " + userVal);

    // clear input after each click
    textInput.value = "";

    let found = false;
    for (let i = 0; i < letters.length; i++) {
        if (userVal === letters[i]) {
            output[i].innerHTML = userVal;
            output[i].classList.add("revealed"); 
            found = true;
        }
    }

    if (found == false) {
        incorrect.className = "error";
        incorrect.innerHTML = "Hmm… not quite. Guess again!";
        setTimeout(() => {
            incorrect.innerHTML = "";
            incorrect.className = "";
        }, 3000);
    } else {
        incorrect.className = "success";
        incorrect.innerHTML = "Great guess! Keep it going!";
        setTimeout(() => {
            incorrect.innerHTML = "";
            incorrect.className = "";
        }, 1200);
    }
});
