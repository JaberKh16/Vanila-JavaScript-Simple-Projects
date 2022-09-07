/*
        Simple Interest Calculator App 
*/

// defining the 'use strict' statement
'use strict';

// selecting 'principal-amount', 'no-of-years' and 'rate-of-interest' input fields
let principalAmount = document.getElementById('principal-amount');
let noOfYears = document.getElementById('no-of-years');
let rateOfInterest = document.getElementById('rate-of-interest');


// to calculate the simple interest
function calculatedInterest(principal, years, rof){
    // parsing all those parameters into some meaningful type
    principal = parseFloat(principal);
    years = parseInt(years);
    rof = parseInt(rof);

    let interestCalculation = 0; // to store the interest value
    
    // if(principal !=='undefind' & years !== 'undefined' && rof!== 'undefined'){
        
    // }
    interestCalculation = (principal * years * rof)/100;
    // else{
    //     console.log('Invalid inputs. Please check and type valid input');
    // }
    return interestCalculation;
}


// selecting the 'calculated-result' button element
const buttonClicked = document.getElementsByClassName('btn')
buttonClicked[0].addEventListener('click', (event)=>{
    event.preventDefault(); // to resolve reloading issue when clicked

    // getting all the values from the input
    principalAmount = principalAmount.value;
    noOfYears = noOfYears.value;
    rateOfInterest = rateOfInterest.value;
    // console.log(typeof principalAmount);

    const simpleInterest = calculatedInterest(principalAmount, noOfYears, rateOfInterest);
    document.getElementById('calculated-result').innerText = simpleInterest;
})

