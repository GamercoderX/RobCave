
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]
    myClock = new Date()
    let day = myClock.getDay()
    let hrs = myClock.getHours()
    let mins = myClock.getMinutes()
    let secs = myClock.getSeconds()
    let mili = myClock.getMilliseconds() 
    // console.log(weekday[day], hrs, mins, secs)
    
    if (mins < 10){
        mins = '0'+mins
    }
    let theday = document.getElementById('clock-top').innerText = weekday[day]
    let thehrs = document.getElementById('hours').innerText = `${hrs}:${mins}`
    //let themins = document.getElementById('minutes').innerText = mins
    //let thesecs = document.getElementById('clock-bottom').innerText = secs


    
  }
    setInterval(refreshTime, 1000);

/*formula 1
moto GP */

/*
<div id="header" class="fixed-header">
    <div ><img class="home" src="Home.png" alt=""></div>
    <div class="the-clock">
    <div id="clock-top" class="clock-top"></div>
    <div id="clock-middle" class="clock-middle">
        <div id="hours"></div>



    </div>
    
    </div>
</div>
*/


