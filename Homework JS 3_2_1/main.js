'use strict';
function setDailyRhythm(wakeUpTime, bedTime) {

    const goodMorning = () => alert('Good Morning!');
    const goToSleep = () => alert('Good Night!');

    const wakeUp = setAlarm(wakeUpTime, goodMorning);
    const goForSleep = setAlarm(bedTime, goToSleep);

    setInterval(wakeUp, 10000);
    setInterval(goForSleep, 10000);
}

function setAlarm(time, callback) {
    return function () {
        const present = new Date();
        const hoursNow = present.getHours().toString();
        const minutesNow = present.getMinutes().toString();
        const [hoursAlarm, minutesAlarm] = time.split(':');

        if (hoursAlarm === hoursNow && minutesAlarm === minutesNow) {
            callback();
        }
    }
}

setDailyRhythm('07:00', '22:00');