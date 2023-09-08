displayUTCTime();
setInterval(displayUTCTime, 1000);
displayDate();

function displayUTCTime() {
    const currentUTCTimeInMilliseconds = new Date().getTime();
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTime.textContent = `${currentUTCTimeInMilliseconds}ms`;

    
}

function displayDate() {
    const currentDay = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    currentDayOfTheWeek.textContent = week[currentDay.getDay()];

    
}
