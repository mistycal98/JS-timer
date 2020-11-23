console.log('starting Script.....');

let hours = 0;
let minutes = 0;
let seconds = 0;

let hour = 0;
let minute = 0;
let second = 0;

let interval = 0;

let status = "stop";

function start() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (minutes < 10) {
        minute = "0" + minutes.toString();
    } else {
        minute = minutes;
    }

    if (seconds < 10) {
        second = "0" + seconds.toString();
    } else {
        second = seconds;
    }

    if (hours < 10) {
        hour = "0" + hours.toString();
    } else {
        hour = hours;
    }

    document.getElementById('timer').innerHTML = hour + ":" + minute + ":" + second;
}

function startStop() {
    if (status === 'stop') {

        interval = window.setInterval(start, 1000);
        document.getElementById('startStop').innerHTML = '<i class="fas fa-pause fa-2x"></i>';
        status = 'start';

    } else {
        window.clearInterval(interval);
        document.getElementById('startStop').innerHTML = '<i class="fas fa-play fa-2x"></i>';

        status = 'stop';
    }
}

function reset() {
    interval = window.clearInterval(interval);
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('timer').innerHTML="00:00:00";
    document.getElementById('startStop').innerHTML='<i class="fas fa-play fa-2x"></i>';
}