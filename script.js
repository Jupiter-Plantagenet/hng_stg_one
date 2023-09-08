
const currentDayOfTheWeek = document.querySelector('p[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('p[data-testid="currentUTCTime"]');

const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]


function trackUTCTime() {
    const utcTIme= Date.now();
    currentUTCTime.textContent = `${utcTIme}ms`;
   
    
}
trackUTCTime();
trackCurrentDay();
setInterval(trackUTCTime, 1000);

function trackCurrentDay(){
    
    const currentDay = days[new Date().getDay()];
    currentDayOfTheWeek.textContent = currentDay;

}


const github = document.getElementById("github");
github.addEventListener("mouseenter", ()=>{
    github.src = "brand-github-filled.svg";
})
github.addEventListener("mouseleave", ()=>{
    github.src = "brand-github.svg";
}

)
