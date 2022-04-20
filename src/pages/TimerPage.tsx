import {useState, useEffect} from 'react';
import '../styles/TimerPage.css';
import {getRemainingTimeUntilMsTimestamp} from '../components/TimerUtils';


var on = false;
var setValues = false;

function startTimer() {
    on = true;
    setValues = true;
}

function resetTimer(){
    (document.getElementById("hour") as HTMLInputElement).value = '0';
    (document.getElementById("minute") as HTMLInputElement).value = '0';
    (document.getElementById("sec") as HTMLInputElement).value = '0';
    on = false;
}

const defaultRemainingTime = {
    seconds: '0',
    minutes: '0',
    hours: '0'
}

const Timer = ({time}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(time);
            if (on) {
            }
        }, 1000);
        return () => clearInterval(intervalId);
    },[time]);



    function updateRemainingTime(countdown: any) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
        if (setValues) {
            remainingTime.hours = (document.getElementById("hour") as HTMLInputElement).value;
            remainingTime.minutes = (document.getElementById("minute") as HTMLInputElement).value;
            remainingTime.seconds = (document.getElementById("sec") as HTMLInputElement).value;
            setValues = false;
        }

        if (on) {
            (document.getElementById("hour") as HTMLInputElement).value = remainingTime.hours;
            (document.getElementById("minute") as HTMLInputElement).value = remainingTime.minutes;
            (document.getElementById("sec") as HTMLInputElement).value = remainingTime.seconds;
        }
    }

    return(
        <div id="container">
            <p id="hour-label" className="label">Hours</p><p id="min-label" className="label">Minutes</p><p id="sec-label" className="label">Seconds</p>
            <input id="hour" type="number" max="99" min="0" className="time"></input><p id="p1" className="semicolon">:</p><input id="minute" type="number" max="60" min="0" className="time"></input><p id="p2" className="semicolon">:</p><input id="sec" type="number" max="60" min="0" className="time"></input>
            <button id="start" className="btn" onClick={startTimer}>Start</button>
            <button id="reset" className="btn" onClick={resetTimer}>Reset</button>
        </div>
    )
}


export default Timer;