/*
    Counter App Projects
*/

'use strict';

// getting input 
let countInitial = document.getElementById('counter-input');
let countValue = parseInt(countInitial.value);

// getting buttons
const buttons = document.querySelectorAll('.btn') // returns a NodeList
// console.log(buttons);

buttons.forEach(function(btn){
    btn.addEventListener('click', function(event){
        // console.log(event.currentTarget); // to target individual buttons
        const classType = event.currentTarget.classList; // returns a DOMTokenList
        console.log(classType)

        // checks if DOMTokenList contains value of 'increase'
        if(classType.contains('increase')){ 
            countValue++;
        }

        // checks if DOMTokenList contains value of 'decrease'
        else if(classType.contains('decrease')){ 
            countValue--;
        }

        // checks if DOMTokenList contains value of 'reset'
        else{
            countValue = 0;
        }

        // Changing the color for count values on different button clicks
        if(countValue > 0){
            countInitial.style.color = 'green';
        }
        if(countValue < 0){
            countInitial.style.color = 'red';
        }
        if(countValue == 0){
            countInitial.style.color = 'black';
        }

        // setting the value for counter
        countInitial.value = countValue;
    })
})