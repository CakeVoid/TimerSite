


function start_timer() {    
    document.body.style.backgroundColor = "rgb(256,256,256)";
    var time = 5000
    time = timer_segment(time)
    var x = setInterval(function () { 
        time = timer_segment(time, x)
    }, 1000);
};

function timer_segment(time, x){
    var seconds = Math.floor(time/1000)
        document.getElementById("timer").innerHTML = seconds;
        // If the count down is finished, write some text
        if (time <= 0) {
            clearInterval(x);
            document.body.style.backgroundColor = "rgb(0,256,0)";
        }
        time -= 1000
        return time
}