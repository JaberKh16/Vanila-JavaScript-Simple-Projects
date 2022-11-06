function getTimerInfo(){
    const timer = new Date();
    document.getElementById("clock").innerHTML = timer.toLocaleTimeString();
}

function getDaysInfo(){
    const days = new Date();
    const startDate = days.getDate();
    const endDate = 7;
    const remainingDays = endDate - startDate;
    document.getElementById("remaining-days").innerHTML = remainingDays+ '' + 'days left';

    // if remainingDays less than 0 then remove the annoucement
    if(remainingDays <=0){
        document.getElementsByClassName("container")[0].style.cssText = "display:none";
    }
}

// setting interval so that time changes in every 1sec
setInterval(getTimerInfo, 1000);
// setting timeout to avoid refreshing in every sec
setTimeout(getTimerInfo, 0);
// calling the getDaysInfo() to get the remaining days
getDaysInfo();