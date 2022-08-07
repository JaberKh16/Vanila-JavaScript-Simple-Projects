/*
    Color Filterization App: Random Color Filterization
*/

// defining the 'use strict' statement
'use strict';


// setting the all the avaible hex colors
const colorsOption = [0, 1, 2, 3, 4, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// getting the button
const button = document.getElementById('color-button');
// console.log(button); // returns the button itself

// getting the color value
const colorValue = document.getElementsByClassName('color-value');
// console.log(colorOption); // returns a HTMLCollection

// including the event on clicking button
button.addEventListener('click', function(){
    
    // setting the hex color symbol which has pound sign '#'
    let hexSymbol = '#';
    let hexColors = " " + hexSymbol; // to store the hex colors starting with "#"

    // though hexcolor has 6 digits in it
    for(let i = 0; i<6; i++){
        // single getRandomNumber() invokation gets a single element from the 'colorsOptionn'
        const randomColor = getRandomNumber(); 
        hexColors += colorsOption[randomColor];
    };
    // console.log(hexColors); // to see the generated hex colors

    // getting the backgroundWindow which returns a HTMLCollection
    const backgroundWindow = document.getElementsByClassName('background-window');
    Array.from(backgroundWindow).forEach(colorElement => {
        // changing the background color for each element of HTMLCollection
        colorElement.style.backgroundColor = hexColors;
    });
    
    // to get the color label in the background labeling
    Array.from(colorValue).forEach(colorLabel=>{
        colorLabel.innerText = hexColors;
        // console.log(colorLabel);
    }); 
;});

// to generate value between 0 to length of colorsOption array
function getRandomNumber(){
    // defaultColors.length is multiplied with the Math.random()
    // because Math.random() basically generate values between 0 to 1
    // and multiplying gives values from 0 to colorsOption.length   
    return Math.floor(Math.random()* colorsOption.length);
}