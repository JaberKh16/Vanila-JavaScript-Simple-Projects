/*
        Expired Timer App
*/

// defining the 'use strict' statement
'use strict';

// selecting the 'button-enronment' element
const enrollmentButton = document.getElementById('button-enrollment');
enrollmentButton.addEventListener('click', function(event){
    event.preventDefault(); // to prevent the reloading
    expiredTimer();
})

function expiredTimer(){
    // getTime() returns a no of miliseconds since Jan 1, 1970 midnight and a specified date
    const endTimer = new Date("September 9, 2022 10:34:00").getTime();
    // console.log(endTimer);
    const startTimer = new Date().getTime();
    // console.log(startTimer); 
    let differentBetweenTimer = endTimer - startTimer;

    // separating hours, minutes and seconds
    const hours = Math.floor(differentBetweenTimer % (24*60*60*1000) / (60*60*1000));
    console.log(hours);
    const minutes = Math.floor(differentBetweenTimer % (60*60*1000) / (60*1000));
    console.log(minutes);
    const seconds = Math.floor(differentBetweenTimer % (60*60*1000) / 1000);
    console.log(seconds);

    creatingTimerEventSection(hours, minutes, seconds);

}

function creatingTimerEventSection(hours, minutes, seconds){
    const timerDivElement = document.createElement('div');
    const timerHeadingElement = document.createElement('h3');
    console.log(timerHeadingElement);
    console.log(timerDivElement);
    const textNodeInsidetimerHeadingElement = document.createTextNode('Timer');

    // setting some default attributes to those elements
    timerDivElement.setAttribute('class', 'timer-div');
    timerDivElement.classList.add('performChangesToDiv');
    timerHeadingElement.classList.add('performChangesToHeading');

    // appending the 'timerHeadingElement' inside the 'timerDivElement'
    timerDivElement.appendChild(timerHeadingElement);
    // appending the 'textNodeInsidetimerHeadingElement' inside the 'timerHeadingElement'
    timerHeadingElement.appendChild(textNodeInsidetimerHeadingElement);
    const selectingCardBody = document.getElementsByClassName('card-body');
    const gettingCardBodyLastElementChild = selectingCardBody[0].lastElementChild;
    console.log(gettingCardBodyLastElementChild);
    console.log(gettingCardBodyLastElementChild.insertAdjacentElement( 'afterend', timerDivElement));
}