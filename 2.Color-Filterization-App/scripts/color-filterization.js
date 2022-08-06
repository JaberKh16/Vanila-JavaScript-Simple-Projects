/*
    Color Filterization App
*/

'use strict';

// setting the default RGB colors
const defaultColors = ['green', 'blue', 'red'];

// getting the button
const button = document.getElementById('color-button');
// console.log(button); // returns the button itself

// getting the color value
const colorOption = document.getElementsByClassName('color-value');
// console.log(colorOption); // returns a HTMLCollection

// including the event on clicking button
button.addEventListener('click', function(event){
    // generating random number from 0 to 2 because there are 3items in "defaultColor" array
    const randomColor = getRandomNumber(); // calling the getDefaultColor() to get the colors
    // document.body.style.backgroundColor = defaultColors[randomColor];
    const backgroundWindow = document.getElementsByClassName('background-window');
    console.log(backgroundWindow);
    // colorOption.textContent = defaultColors[randomColor]
;});

// to generate value between 0 to 2
function getRandomNumber(){
    // defaultColors.length is multiplied with the Math.random()
    // because Math.random() basically generate values between 0 to 1
    // and multiplying gives values from 0 to default.length means 0 to 2 
    return Math.floor(Math.random()* defaultColors.length);
}