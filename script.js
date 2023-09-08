const dataDay = document.querySelector("[data-testid='currentDayOfTheWeek']");
const dataTime = document.querySelector("[data-testid='currentUTCTime']");

console.log(dataDay)
function updateUTCTime() {
    const time = new Date().getTime();
    dataTime.textContent = time
}
function updateUTCDay() {
    const options = {
        timeZone: 'UTC',
        weekday: 'long',
    };
    const day = new Date().toLocaleDateString('en-US', options);
    dataDay.textContent = day
}
// Update the time initially
updateUTCTime();
updateUTCDay();

setInterval(updateUTCTime, 1000);
