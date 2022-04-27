import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/TimerPage.css';
import {db} from '../firebase-config'
import {collection, addDoc} from "firebase/firestore";

var on = false; 
var currentTime = 0;

function startTimer() { //called when start button clicked
    on = true;
    currentTime = Date.now()
}

function resetTimer(){ //called when reset button clicked, resets values
    (document.getElementById("hour") as HTMLInputElement).value = '0';
    (document.getElementById("minute") as HTMLInputElement).value = '0';
    (document.getElementById("sec") as HTMLInputElement).value = '0';
    on = false;
}

const Timer = () => {
    

    useEffect(() => { //every 1 second function is called
        const intervalId = setInterval(() => {
            updateRemainingTime();
        }, 1000);
        return () => clearInterval(intervalId);
    },[]);



    async function updateRemainingTime() { //if on = true (start button clicked) then update values
        const usersCollectionRef = collection(db, "timer-times");
        if (on) {
            var seconds = (document.getElementById("sec") as HTMLInputElement).value; //retrieve value from input element
            var sec: number = +seconds;
            var minutes = (document.getElementById("minute") as HTMLInputElement).value;
            var min: number = +minutes;
            var hours = (document.getElementById("hour") as HTMLInputElement).value;
            var hrs: number = +hours;
            if (sec == 0 && min == 0 && hrs == 0) {
                await addDoc(usersCollectionRef, {time_duration: + new Date() - currentTime, time_started: currentTime})
                on = false;

            }
            else {
                sec--;
                if (sec < 0) {
                    sec = 59;
                    min--;
                    if (min < 0) {
                        min = 59;
                        hrs--;
                    }
                }
            }
            (document.getElementById("sec") as HTMLInputElement).value = sec.toString(); //update input element value
            (document.getElementById("minute") as HTMLInputElement).value = min.toString();
            (document.getElementById("hour") as HTMLInputElement).value = hrs.toString();
        }
    }

    return(
        <div id="TimerPageContainer">
            <p id="hour-label" className="TimerPageLabel">Hours</p><p id="min-label" className="TimerPageLabel">Minutes</p><p id="sec-label" className="TimerPageLabel">Seconds</p>
            <input id="hour" type="number" max="99" min="0" className="time"></input><p id="TimerPageP1" className="semicolon">:</p><input id="minute" type="number" max="60" min="0" className="time"></input><p id="p2" className="semicolon">:</p><input id="sec" type="number" max="60" min="0" className="time"></input>
            <button id="start" className="TimerPageBtn" onClick={startTimer}>Start</button>
            <button id="reset" className="TimerPageBtn" onClick={resetTimer}>Reset</button>
        </div>
    )
}


export default Timer;

