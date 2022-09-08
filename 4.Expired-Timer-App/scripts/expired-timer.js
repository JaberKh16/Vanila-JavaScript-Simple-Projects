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

    
}