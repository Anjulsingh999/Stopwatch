let hours = 0;
let minutes = 0;
let seconds = 0;

let start_timer = document.getElementById("display_time")
let timer = null;

let flag = 0;

function watch_display() {
    seconds++;
    if (seconds == 60) {
        seconds = 0
        minutes++;
        if (minutes == 60) {
            minutes = 0
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    start_timer.innerHTML = h + ":" + m + ":" + s;

}


function start_watch() {
    if (timer !== null) {
        clearInterval(timer)
    }

    timer = setInterval(watch_display, 1000);
}

function stop_watch() {
    clearInterval(timer);
}


let play_btn=document.getElementById("play");
let pause_btn=document.getElementById("pause");

function toggle_btn() {

    if (flag == 0) {
        start_watch();
        flag++;
     
        pause_btn.style.display="block";
        play_btn.style.display="none"
    }
    else if (flag == 1) {
        stop_watch();
        flag--;
        play_btn.style.display="block"
        pause_btn.style.display="none";

    }
}

function reset_btn() {
    clearInterval(timer);
    start_timer.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;


}