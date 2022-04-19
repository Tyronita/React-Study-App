import {useState, useEffect} from 'react';
import '../styles/TimerPage.css';
import {getRemainingTimeUntilMsTimestamp} from '../components/TimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const Timer = ({countdownTimestampMs}: any) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);

    function updateRemainingTime(countdown: any) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="timer">
            <span>{remainingTime.days}</span>
            <span>:</span>
            <span>{remainingTime.hours}</span>
            <span>:</span>
            <span>{remainingTime.minutes}</span>
            <span>:</span>
            <span>{remainingTime.seconds}</span>
        </div>
    );
}

export default Timer;