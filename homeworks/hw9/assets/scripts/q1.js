
//
// Part 1: Code setBackgroundColor() so the background color of #q1-container changes to the color specified
//

/**
 * Sets the background color of #q1-container
 *
 * @param {string} color 
 */

let back = document.getElementById("q1-container");
let b1 = document.getElementById("q1-btn-red");

/*function setBackgroundColor(color) {
    back.style.backgroundColor = "color";
}*/

function redButtonClicked() {
    back.style.backgroundColor = "#EF476F";
}

b1.onclick = redButtonClicked;

// After you finish part 1 & 2, the clicking the red button should turn the background color red!

//
// Part 3: Program the yellow button similar to what you did with the red button
//

// For the yellow button
// Use the color #FFD166, or change it up to your liking

// TODO: Define a function like yellowButtonClicked() that sets the background color

let b2 = document.getElementById("q1-btn-yellow");

function yellowButtonClicked() {
    back.style.backgroundColor = "#FFD166";
}

b2.onclick = yellowButtonClicked;

//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//

// For the green button
// Use the color #06D6A0, or change it up to your liking

// TODO: Make the green button work similarly

let b3 = document.getElementById("q1-btn-green");

function greenButtonClicked() {
    back.style.backgroundColor = "#06D6A0";
}

b3.onclick = greenButtonClicked;


// For the light blue button
// Use the color #118AB2, or change it up to your liking

// TODO: Make the light blue button work similarly

let b4 = document.getElementById("q1-btn-lightblue");

function lightblueButtonClicked() {
    back.style.backgroundColor = "#118AB2";
}

b4.onclick = lightblueButtonClicked;

// For the blue button
// Use the color #073B4C, or change it up to your liking

// TODO: Make the blue button work similarly

let b5 = document.getElementById("q1-btn-blue");

function blueButtonClicked() {
    back.style.backgroundColor = "#073B4C";
}

b5.onclick = blueButtonClicked;