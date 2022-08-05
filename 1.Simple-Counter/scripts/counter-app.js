/*
    Counter App Projects
*/

'use strict';

// getting input 
let countInitial = document.getElementById('counter-input');
let convertedToNum = parseInt(countInitial.value);

// getting buttons
const buttons = document.querySelectorAll('.btn') // returns a NodeList
console.log(buttons);