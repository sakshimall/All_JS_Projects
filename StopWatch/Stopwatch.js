let started = true;
let count = 1;
let prevLap = 0;
let newLap = 0;
let hr = 0;
let min = 0;
let sec = 0;
let Interval;

const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');

let hour = document.getElementById('hr');
let minutes = document.getElementById('min');
let seconds = document.getElementById('sec');

startBtn.addEventListener('click', ()=>{
    if (started){
        started = false;
        startBtn.innerHTML = "Stop"
        return start();
    } 
    else {
        started = true;
        startBtn.innerHTML = "Resume"
        return stop();
    }
});
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);

function start(){
    Interval = setInterval(startTimer, 1000);
}

function startTimer(){
    if (sec === 59){
        sec = 0;
        seconds.innerHTML = "0" + sec;
        min++;
        if (min < 10){
            minutes.innerHTML = "0" + min;
        } else {
            minutes.innerHTML = min;
        }
    } 
    else {
        sec ++;
        newLap ++;
    }

    if (min === 60){
        min = 0;
        minutes.innerHTML = "0" + min;
        hr++;
        if (hr < 10){
            hour.innerHTML = "0" + hr;
        } else {
            hour.innerHTML = hr;
        }
    }

    if (sec < 10){
        seconds.innerHTML = "0" + sec;
    }
    else if (sec < 60){
        seconds.innerHTML = sec;
    }
}

function stop(){
    clearInterval(Interval);
}

function reset(){
    clearInterval(Interval);
    startBtn.innerHTML = "Start";
    started = true;
    hr = 0;
    min = 0;
    sec = 0;
    hour.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    count = 1;
    document.getElementById("tableBody").innerHTML="";
    newLap = 0;
    prevLap = 0;
}

function lap(){
    console.log("prevLap =", prevLap ,"newLap =", newLap);
    const parentNode = document.getElementById("tableBody");
    const child = document.createElement("tr");
    const th = document.createElement("th");
    th.innerHTML = "#" + count;
    const td1 = document.createElement("td");
    td1.innerHTML = calc(Math.abs(newLap-prevLap));
    const td2 = document.createElement("td");
    td2.innerHTML = hour.innerHTML + " :" + minutes.innerHTML + " :" + seconds.innerHTML;
    child.appendChild(th);
    child.appendChild(td1);
    child.appendChild(td2);
    console.log(child);
    parentNode.appendChild(child);
    count++;
    prevLap = newLap;
}

function calc(n){
    console.log("n =", n);
    let m, h, s;
    if (n > 1000){
        s = Math.floor(n / 1000);
    } else {
        s = n;
    }
    if (s < 10){
        s = "0" + s;
    }

    if (n > 60){
        m = Math.floor(n / 60)
        if (m < 10){
            m = "0" + m
        }
        n =  n % 60
    } else {
        m = "00"
    }

    if (n > 60){
        h = Math.floor(n / 60)
        if (h < 10){
            h = "0" + h;
        }
        n =  n % 60
    } else {
        h = "00"
    }
    
    console.log(h + " :" + m + " :" + s);
    return h + " :" + m + " :" + s;
}

