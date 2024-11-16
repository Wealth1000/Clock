const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Select elements
const analogClock = document.getElementById("clock");
const digitalClock = document.getElementById("digital-clock");
const timeElement = document.getElementById("time");
const switchButton = document.getElementById("switch-clock-btn");

// Function to update the analog clock
function updateAnalogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;

    document.getElementById("second-hand").style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById("minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById("hour-hand").style.transform = `rotate(${hourDeg}deg)`;
}

// Function to update the digital clock
function updateDigitalClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format time to be always two digits
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Switch clock visibility
switchButton.addEventListener("click", function() {
    if (analogClock.style.display === "none") {
        analogClock.style.display = "block";
        digitalClock.style.display = "none";
    } else {
        analogClock.style.display = "none";
        digitalClock.style.display = "block";
    }
});

// Update clocks every second
setInterval(function() {
    if (analogClock.style.display === "block") {
        updateAnalogClock();
    } else if (digitalClock.style.display === "block") {
        updateDigitalClock();
    }
}, 1000);

// Initial setup
updateDigitalClock();
