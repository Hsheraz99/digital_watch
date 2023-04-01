var seconds=00;
var minutes=00;
var hours=3;
var outputSeconds=document.getElementById("second");
var outputMinutes=document.getElementById("minutes");
var outputHours=document.getElementById("hours");
var displayTime=document.getElementById("displayTime")
var buttonStart=document.getElementById("btn-start");
var buttonStop=document.getElementById("btn-stop");
var Interval;

buttonStart.addEventListener('click',()=>{
    clearInterval(Interval);
    Interval=setInterval(startTime,1000);
});
buttonStop.addEventListener('click',()=>{
    clearInterval(Interval);
});

function startTime(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    displayTime.innerHTML=hours+":"+minutes+":"+seconds;
}