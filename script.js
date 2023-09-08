
const date = new Date();
const time = document.getElementById("time");
const week = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const today = week[date.getDay()];

const dayOfTheWeek = document.getElementById("dayoftheweek");
dayOfTheWeek.textContent = today;

const github = document.getElementById("github");
github.addEventListener("mouseenter", ()=>{
    github.src = "brand-github-filled.svg";
})
github.addEventListener("mouseleave", ()=>{
    github.src = "brand-github.svg";
}

)


trackUTCTime(date, time);

function trackUTCTime(date, time) {
    setInterval(() => {
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const seconds = date.getUTCSeconds();
        const milliseconds = date.getTime();

        const formattedTime = timeFormatter(hours, minutes, seconds, milliseconds);
        const [time, utcTime]= formattedTime;
        time.context = utcTime;

        const timeInFormat = document.getElementById("timeInFormat");
        timeInFormat.context = time;
        

    }, 1000)

    
}


function timeFormatter(hours, minutes, seconds, milliseconds) {
    const meridian = hours <= 12 ? 'AM' : 'PM';

    const formmattedHours = hours % 12 || 12;
    const formmattedMinutes = leadingZero(minutes);
    const formattedSeconds = leadingZero(seconds);

    const formattedTime = `${formmattedHours}:${formmattedMinutes}:${formattedSeconds} ${meridian}`;
    const unFormattedTime = `${milliseconds}ms`;
     return [formattedTime, unFormattedTime];
}

function leadingZero(digits) {
    return digits < 10? `0${digits}` : digits;
}
