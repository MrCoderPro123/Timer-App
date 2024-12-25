let stopwatchTime = document.getElementById('stpTime'); 
let strBtn = document.getElementById('startBtn-Stp');
let stpBtn = document.getElementById('stopBtn-Stp');
let rstBtn = document.getElementById('restartBtn-Stp');
let timerInput = document.getElementById('tmrTimeInput');
let timerBtn = document.getElementById('startBtn-Tmr');
let tmrTime = document.getElementById('tmrTime');
let sec = 0;
let min = 0;
let tmrMin = 0;
let tmrSec = 0;
let tmrHr = 0;
let timeUpSound = document.getElementById('timesUp');

// setInterval(() => {
//     sec = sec + 1;
//     if (sec == 60) {
//         sec = 0;
//         min = min + 1;
//     }
//     stopwatchTime.innerText = min + " : " + sec;
// }, 1000);

strBtn.addEventListener('click', () => {
    stopwatchTime.innerText = min + " : " + sec;
    stpw = setInterval(() => {
        sec = sec + 1;
        if (sec == 60) {
            sec = 0;
            min = min + 1;
        }
        stopwatchTime.innerText = min + " : " + sec;
    }, 1000);
}, 1000);
stpBtn.addEventListener('click', () => {
    clearInterval(stpw);
});
rstBtn.addEventListener('click', () => {
    clearInterval(stpw);
    sec = 0;
    min = 0;
    stopwatchTime.innerText = min + " : " + sec;
});


timerBtn.addEventListener('click', () => {
    let time = timerInput.value;
    tmrMin = parseInt(time);
    while (tmrMin > 60) {
        tmrHr = tmrHr + 1;
        tmrMin = tmrMin - 60;
    }
    // if (tmrMin > 60) {
    //     tmrHr = tmrHr + 1;
    //     tmrMin = tmrMin - 60;
        
    // }
    tmrSec = 0;
    tmrTime.innerText = `${tmrHr} : ${tmrMin} : ${tmrSec}`;
    thisInt = setInterval(() => {
        tmrSec = tmrSec - 1;
        if (tmrSec < 0) {
            tmrSec = 59;
            tmrMin = tmrMin - 1;
        }
        if (tmrMin < 0) {
            tmrMin = 0;
            tmrSec = 0;
            tmrHr = tmrHr - 1;
        }
        tmrTime.innerText = `${tmrHr} : ${tmrMin} : ${tmrSec}`;
        if (tmrMin == 0 && tmrSec == 0) {
            clearInterval(thisInt);
            timeUpSound.play();
            alert('Time Up!!!!!!');
            // wait for 10 seconds then stop sound
            setTimeout(() => {
                timeUpSound.pause();
            }, 15000);
        }
    }, 1000);   

});