import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestampMs) {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    // if(timestampDayjs.isBefore(nowDayjs)) {
    //     return {
    //         seconds : '0',
    //         minutes : '0',
    //         hours : '0'
    //     } 
    // }
    console.log((getRemainingSeconds(nowDayjs, timestampDayjs)).toString());
    console.log((getRemainingMinutes(nowDayjs, timestampDayjs)).toString());
    console.log((getRemainingHours(nowDayjs, timestampDayjs)).toString());
    return {
        seconds : getRemainingSeconds(nowDayjs, timestampDayjs).toString(),
        minutes : getRemainingMinutes(nowDayjs, timestampDayjs).toString(),
        hours : getRemainingHours(nowDayjs, timestampDayjs).toString()
    } 
}

function getRemainingSeconds(nowDayjs, timestampDayjs) {
    const seconds = 60 + timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return seconds;
}

function getRemainingMinutes(nowDayjs, timestampDayjs) {
    const minutes = 60 + timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return minutes;
}

function getRemainingHours(nowDayjs, timestampDayjs) {
    const hours = 24 + timestampDayjs.diff(nowDayjs, 'hours') % 24;
    return hours;
}