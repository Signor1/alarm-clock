//get date
var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var weekday = date.getDay();
document.getElementById("day").innerText = day;
var year = date.getFullYear();
document.getElementById("year").innerText = year;
//month
switch(month){
    case 0:
        document.getElementById("month").innerText ="January";
        break;
    case 1:
        document.getElementById("month").innerText ="February";
        break;
     case 2:
         document.getElementById("month").innerText ="March";
         break;  
    case 3:
         document.getElementById("month").innerText ="April";
         break;   
    case 4:
         document.getElementById("month").innerText ="May";
         break;  
    case 5:
         document.getElementById("month").innerText ="June";
         break;     
    case 6:
         document.getElementById("month").innerText ="July";
         break; 
    case 7:
         document.getElementById("month").innerText ="August";
         break; 
    case 8:
         document.getElementById("month").innerText ="September";
         break; 
    case 9:
         document.getElementById("month").innerText ="October";
         break;  
    case 10:
         document.getElementById("month").innerText ="November";
         break;     
    case 11:
         document.getElementById("month").innerText ="December";
         break; 
}

//weekdays
switch(weekday){
    case 0:
        var sun = document.getElementById("sun");
        sun.style.backgroundColor = "#ffffffcc";
        sun.style.color = "#091921";
         sun.style.fontWeight = "bold";
         sun.style.transform = "scale(1.2)";
        break;
    case 1:
        var mon = document.getElementById("mon");
        mon.style.backgroundColor = "#ffffffcc";
        mon.style.color = "#091921";
        mon.style.fontWeight = "bold";
        mon.style.transform = "scale(1.2)";
        break;
     case 2:
         var tues = document.getElementById("tues");
         tues.style.backgroundColor ="#ffffffcc";
         tues.style.color = "#091921";
         tues.style.fontWeight = "bold";
         tues.style.transform = "scale(1.2)";
         break;  
    case 3:
         var wed = document.getElementById("wed");
         wed.style.backgroundColor ="#ffffffcc";
         wed.style.color = "#091921";
         wed.style.fontWeight = "bold";
         wed.style.transform = "scale(1.2)";
         break;   
    case 4:
         var thurs = document.getElementById("thurs");
         thurs.style.backgroundColor ="#ffffffcc";
         thurs.style.color = "#091921";
         thurs.style.fontWeight = "bold";
         thurs.style.transform = "scale(1.2)";
         break;  
    case 5:
         var fri = document.getElementById("fri");
         fri.style.backgroundColor ="#ffffffcc";
         fri.style.color = "#091921";
         fri.style.fontWeight = "bold";
         fri.style.transform = "scale(1.2)";
         break;     
    case 6:
         var sat = document.getElementById("sat");
         sat.style.backgroundColor ="#ffffffcc";
         sat.style.color = "#091921";
         sat.style.fontWeight = "bold";
         sat.style.transform = "scale(1.2)";
         break; 
}


//Setting the Clock
function showTime(){
     var currentDate = new Date();
     var h = currentDate.getHours() //0 - 23
     var m = currentDate.getMinutes()  // 0 - 59
     var s = currentDate.getSeconds()  // 0 - 59
     var session = "AM";

     if(h == 0){
          h = 12;
     }
     if(h > 12){
          h = h -12;
          session = "PM";
     }
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;

     var time = h + " " + " "+ ":" +" " + m + " " + ":" + " " + s + " " + session;
     var clockHolder = document.getElementById("clock-display");
     clockHolder.innerText = time;
     clockHolder.textContent = time;

     setTimeout(showTime, 1000);
}

showTime();

//setting the alarm
var time, alarm, currentH, currentM,
    activeAlarm = false,
    sound = new Audio("Alarm.mp3");

// loop alarm
sound.loop = true;

// define a function to display the current time
function displayTime() {
  var now = new Date();
  time = now.toLocaleTimeString();
  // time = "1:00:00 AM";
  // watch for alarm
  if (time === alarm) {
    sound.play();
    // show snooze button
    document.getElementById("snooze").style.display = "block";
  }
  setTimeout(displayTime, 1000);
}
displayTime();

// add option values relative towards time
function addMinSecVals(id) {
  var select = id;
  var min = 59;
  
  for (let i = 0; i <= min; i++) {
    // defined as new Option(text, value)
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i < 10 ? "0" + i : i);
  }
}
function addHours(id) {
  var select = id;
  var hour = 12;
  for (let i = 1; i <= hour; i++) {
     // defined as new Option(text, value)
     select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
   }
 }
 var minutes = document.getElementById("minutes");
 var hours = document.getElementById("hours");
 var seconds = document.getElementById("seconds");
 var ampm = document.getElementById("ampm");

 addMinSecVals(minutes);
 addMinSecVals(seconds);
 addHours(hours);
 
 // set and clear alarm
 var startstop = document.getElementById("startstop");
 startstop.onclick = function() {
   // set the alarm
   if (activeAlarm === false) {
     hours.disabled = true;
     minutes.disabled = true;
     seconds.disabled = true;
     ampm.disabled = true;

     alarm = hours.value + ":" + minutes.value + ":" + seconds.value + " " + ampm.value;
    this.textContent = "Clear Alarm";
    activeAlarm = true;
  } else {
    // clear the alarm
    hours.disabled = false;
    minutes.disabled = false;
    seconds.disabled = false;
    ampm.disabled = false;
    
    sound.pause();
    alarm = "00:00:00 AM";
    this.textContent = "Set Alarm";
    // hide snooze button
    document.getElementById("snooze").style.display = "none";
    activeAlarm = false;
  }
};

// snooze for 5 minutes
var snooze = document.getElementById("snooze");
snooze.onclick = function() {
  if (activeAlarm === true) {
    // grab the current hour and minute
    currentH = time.substr(0, time.length - 9);
    currentM = time.substr(currentH.length + 1, time.length - 8);
    
    if (currentM >= "55") {
      minutes.value = "00";
      hours.value = parseInt(currentH) + 1;
    } else {
      if (parseInt(currentM) + 5 <= 9) {
        minutes.value = "0" + parseInt(currentM + 5);
      } else {
        minutes.value = parseInt(currentM) + 5;
      }
    }
    
    // hide snooze button
    document.getElementById("snooze").style.display = "none";
    
    // now reset alarm
    startstop.click();
    startstop.click();
  } else {
    return false;
  }
};