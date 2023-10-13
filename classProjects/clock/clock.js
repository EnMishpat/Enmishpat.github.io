function startClock(){
    let theTime = new Date(),
        hours = theTime.getHours(),
        mins = theTime.getMinutes(),
        secn = theTime.getSeconds(),
        ap = (hours>=12)? "p.m." : "a.m.",
        clockDiv= document.getElementById("myClock");

        hours = (hours >= 13) ? hours -= 12 : hours;
        hours = (hours < 1) ? 12 : hours;
        mins = (mins < 10) ? "0" + mins : mins;
        secn = (secn < 10) ? "0" + secn : secn;
        clockDiv.innerHTML = hours + ":" + mins + ":" + secn + "" + ap;
        setTimeout (function(){startClock;}, 1000);
}

startClock();